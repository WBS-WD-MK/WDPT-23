'use strict';

class DOMConsole {
  #output;

  constructor(element) {
    this.#output = element;
    this.overrideConsole();
  }

  customStringify(value, indentLevel = 1) {
    if (Array.isArray(value)) {
      return `[${value
        .map(element => {
          if (typeof element === 'object') {
            return `\n${' '.repeat(indentLevel * 2)}${this.customStringify(
              element,
              indentLevel + 1
            )}`;
          } else if (typeof element === 'string') {
            return `'${element}'`;
          } else {
            return String(element);
          }
        })
        .join(', ')}]`;
    } else if (typeof value === 'object') {
      let result = '{\n';
      const entries = Object.entries(value);
      entries.forEach(([key, val], index) => {
        result += `${' '.repeat(indentLevel * 2)}${key}: ${this.customStringify(
          val,
          indentLevel + 1
        )}`;
        if (index < entries.length - 1) result += ',';
        result += '\n';
      });
      result += `${' '.repeat((indentLevel - 1) * 2)}}`;
      return result;
    } else if (typeof value === 'string') {
      return `'${value}'`;
    } else {
      return String(value);
    }
  }

  overrideConsole() {
    const originalConsole = { ...console };
    const overridingBehavior = (method, className, emoji) => {
      return (...args) => {
        for (let arg of args) {
          let fileAndLine = '';
          if (arg instanceof Error) {
            const stackSplit = arg.stack.split('/');
            fileAndLine = stackSplit.pop();
            arg = stackSplit.join().split('\n')[0];
          } else {
            fileAndLine = new Error().stack.split('/').pop();
          }
          const outputLine = document.createElement('div');
          outputLine.innerHTML = `<span class='emoji'>${emoji}</span>`;
          outputLine.className += `line ${className}`;
          if (typeof arg === 'function') {
            outputLine.innerHTML += `<pre>${arg.toString()}</pre>`;
          } else if (typeof arg === 'object') {
            outputLine.innerHTML += `${this.customStringify(arg)}`;
          } else {
            outputLine.innerHTML += arg;
          }
          outputLine.innerHTML += `<span> | ${fileAndLine}</span>`;
          this.#output.appendChild(outputLine);
        }
        this.#output.scroll({
          top: this.#output.scrollHeight,
          behavior: 'smooth'
        });
        queueMicrotask(originalConsole[method].bind(originalConsole, ...args));
      };
    };
    console.log = overridingBehavior('log', 'none', '📌');
    console.warn = overridingBehavior('warn', 'warn', '✋🏽');
    console.info = overridingBehavior('info', 'info', 'ℹ️');
    console.error = overridingBehavior('error', 'error', '💀');
  }
}

new DOMConsole(document.querySelector('#output'));
