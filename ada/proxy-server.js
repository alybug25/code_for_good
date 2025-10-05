// Simple proxy server to handle Anthropic API calls and avoid CORS issues
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy endpoint for Anthropic Claude API
app.post('/api/claude', async (req, res) => {
    try {
        const { shoppingList } = req.body;
        
        // Your Anthropic API key - set as environment variable
        const API_KEY = process.env.ANTHROPIC_API_KEY || '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';
        
        const prompt = `You are an intelligent shopping list parser for a UK grocery store. Your job is to understand what the user actually wants to buy, even if they write it poorly.

Original input: "${shoppingList}"

CRITICAL PARSING RULES:
1. SMART SEPARATION: Understand what are separate items vs. parts of one item name
   - "beans. bug" = "Beans" (two separate items, remove non-grocery "bug")
   - "green beans" = "Green beans" (one item with descriptor)
   - "car car apples" = "Apples" (ignore non-grocery, keep grocery)
   - "apple pie" = "Apple pie" (one item)
   - "apple, pie" = "Apple, Pie" (two separate items)

2. INTELLIGENT PARSING: Look for natural separators and context
   - Commas, periods, semicolons, "and", "&" = separate items
   - Spaces within descriptive names = one item
   - Numbers + items = one item (e.g., "2 apples" = "Apples")

3. CONTEXT UNDERSTANDING: Use grocery store knowledge
   - "beans" = grocery item
   - "bug" = not a grocery item (remove)
   - "car" = not a grocery item (remove)
   - "green beans" = one grocery item
   - "baked beans" = one grocery item

YOUR TASKS:
1. PARSE CORRECTLY: Identify separate grocery items vs. single items with descriptors
2. GRAMMAR & SPELLING: Fix all mistakes and typos
3. REMOVE NON-GROCERY: Remove cars, phones, bugs, toys, electronics, etc.
4. UK TERMINOLOGY: Convert to British English (cookies→biscuits, soda→soft drinks)
5. COMBINE DUPLICATES: If same item appears multiple times, make it plural
6. PROPER CAPITALIZATION: Capitalize correctly
7. STANDARDIZE NAMES: Use proper grocery store names

EXAMPLES:
- "car car apples" → "Apples"
- "beans. bug" → "Beans"
- "green beans, baked beans" → "Green beans, Baked beans"
- "apple pie, apple" → "Apple pie, Apple"
- "2 apples, 3 bananas" → "Apples, Bananas"
- "cookies, soda" → "Biscuits, Soft drinks"
- "please buy milk and bread" → "Milk, Bread"

Return ONLY the cleaned grocery items as a comma-separated string. No explanations.`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 500,
                temperature: 0.3,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.content || !data.content[0] || !data.content[0].text) {
            throw new Error('Invalid response from Anthropic Claude API');
        }

        const cleanedText = data.content[0].text.trim();
        
        // Clean up the response - remove common AI prefixes
        let cleanText = cleanedText.replace(/^(here are|alternatives?|options?|suggestions?):?\s*/i, '');
        cleanText = cleanText.replace(/^(some|a few|two)\s+/i, '');
        cleanText = cleanText.replace(/^(you could try|consider|try)\s+/i, '');
        
        // Split by comma first, then clean each item
        const result = cleanText.split(',').map(item => {
            let cleanItem = item.trim();
            // Remove any remaining explanatory text
            cleanItem = cleanItem.replace(/^(and|or|the|a|an)\s+/i, '');
            cleanItem = cleanItem.replace(/[.!?]+$/, ''); // Remove trailing punctuation
            return cleanItem.trim();
        }).filter(item => item.length > 0 && !item.match(/^(and|or|the|a|an)\s/i));

        res.json({ success: true, items: result });
        
    } catch (error) {
        console.error('Proxy server error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
    console.log(`📡 Claude API proxy ready at http://localhost:${PORT}/api/claude`);
});

