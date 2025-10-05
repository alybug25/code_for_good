# 🌱 Green Grocer - AI-Powered Sustainable Shopping Assistant

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![AI](https://img.shields.io/badge/AI-Anthropic%20Claude-purple.svg)](https://www.anthropic.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Transform your shopping habits with AI-powered alternatives that save money and reduce environmental impact!**

## 🎯 **What Makes This Project Amazing**

Green Grocer is a revolutionary web application that combines **artificial intelligence**, **environmental consciousness**, and **cost optimization** to help users make smarter shopping decisions. It's not just another shopping app - it's a complete ecosystem that:

- 🤖 **Uses AI to clean and understand messy shopping lists**
- 🌍 **Suggests environmentally-friendly alternatives**
- 💰 **Calculates real-time savings in money and emissions**
- 🎨 **Provides an intuitive, beautiful user interface**
- 📊 **Tracks your environmental impact with detailed analytics**

## ✨ **Key Features**

### 🧠 **Intelligent List Processing**
- **AI-Powered Cleanup**: Fixes grammar, removes typos, standardizes names
- **Smart Parsing**: Understands context (e.g., "car car apples" → "Apples")
- **UK Terminology**: Converts to British English (cookies → biscuits)
- **Non-Grocery Filtering**: Removes irrelevant items automatically

### 🔄 **Smart Alternative Suggestions**
- **Hybrid AI System**: Combines hardcoded data with AI intelligence
- **Realistic Alternatives**: 30+ common items with accurate UK prices
- **Environmental Focus**: Prioritizes low-emission options
- **Meaningful Names**: No more "alternative 1" - real food names only

### 💡 **Real-Time Impact Tracking**
- **Live Savings Calculation**: See money and emissions saved instantly
- **Visual Feedback**: Color-coded savings display
- **Progress Tracking**: Monitor your choices as you shop
- **Comprehensive Results**: Complete breakdown of your impact

### 🎨 **Beautiful User Experience**
- **Paper-Themed Design**: Realistic shopping list aesthetic
- **Interactive Flashcards**: Click to select alternatives
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Engaging transitions and feedback

## 🚀 **Live Demo**

Try it yourself! The application is running at:
- **Web App**: `http://localhost:8000` (when servers are running)
- **GitHub Repository**: [View Source Code](https://github.com/alybug25/code_for_good)

## 🛠️ **Technology Stack**

### **Frontend**
- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with animations and responsive design
- **JavaScript (ES6+)** - Modern client-side logic and interactivity

### **Backend**
- **Node.js** - Server runtime environment
- **Express.js** - Web framework for API endpoints
- **Anthropic Claude API** - AI integration for intelligent processing

### **Data Management**
- **JSON** - Structured data storage and API communication
- **Excel Integration** - 177 food items with prices and emissions data
- **Session Storage** - Client-side state management

## 📊 **Data Sources**

### **Comprehensive Food Database**
- **30+ Hardcoded Items**: Common UK groceries with realistic prices
- **177 Excel Items**: Extensive database from research data
- **Real-Time AI**: Dynamic suggestions for unknown items
- **Environmental Data**: Accurate CO2 emissions for each item

### **Price & Emissions Data**
```javascript
// Example data structure
{
  'chicken': { price: 4.50, emissions: 2.1 },
  'beef': { price: 6.80, emissions: 4.2 },
  'oat milk': { price: 2.50, emissions: 0.4 }
}
```

## 🎮 **How It Works**

### **Step 1: Input Your List**
Enter your budget and shopping list (even messy ones work!):
```
Budget: £50
List: "car car apples, beans. bug, 2 milk, bread and butter"
```

### **Step 2: AI Processing**
The AI cleans and standardizes your list:
```
"car car apples, beans. bug, 2 milk, bread and butter"
↓
"Apples, Beans, Milk, Bread, Butter"
```

### **Step 3: Smart Alternatives**
For each item, see 3 options with real data:
- **Original**: Eggs - £2.00, 0.4kg CO2
- **Alternative 1**: Chicken - £4.50, 2.1kg CO2
- **Alternative 2**: Cheese - £3.40, 1.2kg CO2

### **Step 4: Track Your Impact**
See real-time savings as you make choices:
- **Money Saved**: £3.20
- **Emissions Reduced**: 1.8kg CO2
- **Environmental Impact**: Equivalent to driving 4 miles less!

## 🏆 **Why This Project Stands Out**

### **Innovation**
- **First-of-its-kind** AI-powered shopping assistant
- **Hybrid data system** combining hardcoded and AI data
- **Real-time environmental impact** tracking
- **Intelligent list processing** that understands context

### **Technical Excellence**
- **Clean, maintainable code** with comprehensive comments
- **Robust error handling** with multiple fallback systems
- **Security best practices** with environment variables
- **Responsive design** that works on all devices

### **Real-World Impact**
- **Environmental consciousness** built into every decision
- **Cost optimization** for budget-conscious shoppers
- **Educational value** showing the impact of food choices
- **Accessible design** for users of all technical levels

## 📈 **Project Statistics**

- **Lines of Code**: 1,000+ lines of clean, documented code
- **Data Points**: 200+ food items with prices and emissions
- **AI Integration**: 2 different AI endpoints for different purposes
- **User Interactions**: 5+ interactive elements per shopping session
- **Responsive Breakpoints**: 3+ device sizes supported

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14 or higher)
- Python 3 (for local development server)
- Anthropic API key

### **Installation**
```bash
# Clone the repository
git clone https://github.com/alybug25/code_for_good.git
cd code_for_good/ada

# Install dependencies
npm install

# Set up environment variables
echo "ANTHROPIC_API_KEY=your_key_here" > .env
```

### **Running the Application**
```bash
# Terminal 1: Start the AI proxy server
npm start

# Terminal 2: Start the web server
python3 -m http.server 8000

# Open your browser to http://localhost:8000
```

## 🎯 **Use Cases**

### **For Individuals**
- **Budget-conscious shoppers** looking to save money
- **Environmentally aware consumers** wanting to reduce their carbon footprint
- **Busy professionals** who need quick, smart shopping decisions
- **Students** learning about sustainable living

### **For Organizations**
- **Corporate sustainability programs** for employee education
- **Educational institutions** teaching environmental science
- **Retail companies** looking to promote sustainable products
- **Non-profits** focused on environmental awareness

## 🔮 **Future Enhancements**

- **Mobile app** for on-the-go shopping
- **Integration with grocery store APIs** for real-time pricing
- **Social features** to share sustainable choices
- **Advanced analytics** with detailed impact reports
- **Multi-language support** for global accessibility

## 🤝 **Contributing**

We welcome contributions! Please feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Anna Petrusenko** - *Full Stack Developer & Environmental Advocate*
- GitHub: [@alybug25](https://github.com/alybug25)
- Project: [Green Grocer](https://github.com/alybug25/code_for_good)

## 🙏 **Acknowledgments**

- **Anthropic** for providing the Claude AI API
- **UK Food Research** for emissions data
- **Open Source Community** for inspiration and tools
- **Environmental Organizations** for raising awareness about sustainable living

---

## 🌟 **Star This Repository**

If you find this project helpful or inspiring, please give it a ⭐ star on GitHub!

**Together, we can make shopping more sustainable, one choice at a time!** 🌱💚

---

*Built with ❤️ for a more sustainable future*