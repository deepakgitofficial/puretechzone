import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Code lines to type
  const codeLines = [
    { text: "import React from 'react';", color: 'text-gray-400' },
    { text: "import { Mobile, Web } from './Services';", color: 'text-gray-400' },
    { text: "", color: '' },
    { text: "const PureTechZone = () => {", color: 'text-blue-400' },
    { text: "  return (", color: 'text-gray-300' },
    { text: "    <div className=\"future-tech\">", color: 'text-gray-300' },
    { text: "      <Web />", color: 'text-gray-300' },
    { text: "      <Mobile />", color: 'text-gray-300' },
    { text: "      {/* Building the Future */}", color: 'text-gray-500' },
    { text: "    </div>", color: 'text-gray-300' },
    { text: "  );", color: 'text-gray-300' },
    { text: "};", color: 'text-blue-400' },
  ];

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.text.length) {
          setDisplayedCode(prev => {
            const lines = prev.split('\n');
            lines[currentLineIndex] = currentLine.text.substring(0, charIndex);
            return lines.join('\n');
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            setDisplayedCode(prev => prev + '\n');
          }, 100);
        }
      }, 30); // Typing speed (30ms per character)

      return () => clearInterval(typeInterval);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentLineIndex]);

  // Format code with syntax highlighting
  const formatCode = (code) => {
    const lines = code.split('\n');
    return lines.map((line, index) => {
      if (index >= codeLines.length) return null;

      const lineConfig = codeLines[index];
      let formattedLine = line;

      // Apply syntax highlighting
      if (line.includes('import')) {
        formattedLine = line.replace(/(import|from)/g, '<span class="text-purple-400">$1</span>')
          .replace(/'([^']+)'/g, '<span class="text-green-400">\'$1\'</span>');
      } else if (line.includes('const') || line.includes('=>')) {
        formattedLine = line.replace(/const/g, '<span class="text-blue-400">const</span>')
          .replace(/PureTechZone/g, '<span class="text-yellow-400">PureTechZone</span>')
          .replace(/=>/g, '<span class="text-blue-400">=></span>')
          .replace(/\(\)/g, '<span class="text-yellow-400">()</span>');
      } else if (line.includes('return')) {
        formattedLine = line.replace(/return/g, '<span class="text-purple-400">return</span>');
      } else if (line.includes('<div') || line.includes('</div>')) {
        formattedLine = line.replace(/div/g, '<span class="text-red-400">div</span>')
          .replace(/className/g, '<span class="text-sky-300">className</span>')
          .replace(/"([^"]+)"/g, '<span class="text-green-400">"$1"</span>');
      } else if (line.includes('<Web') || line.includes('<Mobile')) {
        formattedLine = line.replace(/Web|Mobile/g, '<span class="text-yellow-400">$&</span>');
      } else if (line.includes('/*')) {
        formattedLine = `<span class="text-gray-500">${line}</span>`;
      }

      return (
        <div
          key={index}
          className={lineConfig.color}
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              We Build Websites That  <span className="text-primary">Grow Your Business</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              We specialize in high-performance web applications and native mobile solutions. From concept to deployment, we build digital products that scale and engage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Visual Element - Animated Code Window */}
          <div className="relative hidden lg:block perspective-1000">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative bg-gray-900 rounded-xl shadow-2xl border border-gray-800 p-2 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
              {/* Window Controls */}
              <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2 mb-2">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">App.jsx</div>
              </div>

              {/* Code Content with Auto-Typing Effect */}
              <div className="p-4 font-mono text-sm space-y-1 bg-gray-900/50 rounded-b-lg overflow-hidden h-[300px] relative">
                {formatCode(displayedCode)}

                {/* Animated Cursor */}
                {!isTypingComplete && (
                  <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse"></span>
                )}
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce shadow-primary/20">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold">Status</div>
                  <div className="text-sm font-bold text-gray-900">100% Secure</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
