// lessonData.js

export const lessons = [
  // ================= JavaScript (id: '1') =================
  {
    id: 'js1',
    courseId: '1',
    title: 'Introduction to JavaScript',
    content: [
      'JavaScript is a popular programming language used to make websites interactive and dynamic.',
      'It runs in the browser and can also run on servers using Node.js.',
      'Example: Print a message to the console:',
      '```javascript\nconsole.log("Hello, JavaScript!");\n```'
    ]
  },
  {
    id: 'js2',
    courseId: '1',
    title: 'Variables & Data Types',
    content: [
      'Variables store data that your program can use and manipulate.',
      'Declare variables using var, let, or const. Use const for values that do not change.',
      'Common data types include strings (text), numbers, booleans (true/false), arrays (lists), and objects (key-value pairs).',
      'Example: let name = "Alex"; const age = 15; console.log(name, age);'
    ]
  },
  {
    id: 'js3',
    courseId: '1',
    title: 'Operators',
    content: [
      'Operators allow you to perform operations on values.',
      'Arithmetic: +, -, *, /; Comparison: ==, ===, !=; Logical: &&, ||, !',
      'Example: let a = 5, b = 3; console.log(a + b); console.log(a > b);'
    ]
  },
  {
    id: 'js4',
    courseId: '1',
    title: 'Control Flow',
    content: [
      'Control flow determines which code runs and when.',
      'Use if, else if, else statements; loops like for, while, do-while to repeat actions.',
      'Example: for(let i = 0; i < 5; i++) { console.log("Number: " + i); }'
    ]
  },
  {
    id: 'js5',
    courseId: '1',
    title: 'Functions',
    content: [
      'Functions are reusable blocks of code.',
      'They can take parameters and return values.',
      'Example: function greet(name) { return "Hello " + name; } console.log(greet("Alex"));'
    ]
  },
  {
    id: 'js6',
    courseId: '1',
    title: 'Arrays',
    content: [
      'Arrays store multiple values in one variable.',
      'Access elements using index; use push(), pop(), shift(), unshift() to modify.',
      'Example: let fruits = ["apple", "banana", "orange"]; console.log(fruits[1]); fruits.push("grape");'
    ]
  },
  {
    id: 'js7',
    courseId: '1',
    title: 'Objects',
    content: [
      'Objects store data as key-value pairs.',
      'They group related information together.',
      'Example: let person = {name: "Alex", age: 15}; console.log(person.name);'
    ]
  },
  {
    id: 'js8',
    courseId: '1',
    title: 'DOM Manipulation',
    content: [
      'The DOM represents the structure of a webpage.',
      'JavaScript can read and change HTML elements and styles dynamically.',
      'Example: document.getElementById("demo").innerText = "Hello World!";'
    ]
  },
  {
    id: 'js9',
    courseId: '1',
    title: 'Events',
    content: [
      'Events are actions by users or the browser, e.g., clicks, key presses, mouse moves.',
      'You can listen to events and execute code when they occur.',
      'Example: button.addEventListener("click", function() { alert("Button clicked!"); });'
    ]
  },
  {
    id: 'js10',
    courseId: '1',
    title: 'ES6 Features',
    content: [
      'ES6 introduced modern JavaScript features like arrow functions, let/const, template literals, and modules.',
      'These features make code cleaner and easier to write.',
      'Example: const add = (a, b) => a + b; console.log(`Sum: ${add(5,3)}`);'
    ]
  },

  // ================= Python (id: '2') =================
  {
    id: 'py1',
    courseId: '2',
    title: 'Introduction to Python',
    content: [
      'Python is a high-level, interpreted language known for its readability.',
      'It is used for web development, data science, and automation.',
      'Example: print("Hello, Python!")'
    ]
  },
  {
    id: 'py2',
    courseId: '2',
    title: 'Variables & Data Types',
    content: [
      'Variables store data that can be used later.',
      'Data types include int, float, str, list, tuple, set, dict.',
      'Example: name = "Alex"; age = 15; print(name, age)'
    ]
  },
  {
    id: 'py3',
    courseId: '2',
    title: 'Operators',
    content: [
      'Operators perform operations on values.',
      'Arithmetic: +, -, *, /; Comparison: ==, !=; Logical: and, or, not',
      'Example: a = 5; b = 3; print(a + b); print(a > b)'
    ]
  },
  {
    id: 'py4',
    courseId: '2',
    title: 'Control Flow',
    content: [
      'Control flow determines which code runs.',
      'Use if, elif, else for conditions; for and while loops to repeat tasks.',
      'Example: for i in range(5): print("Number:", i)'
    ]
  },
  {
    id: 'py5',
    courseId: '2',
    title: 'Functions',
    content: [
      'Functions are reusable blocks of code.',
      'They can accept parameters and return values.',
      'Example: def greet(name): return "Hello " + name; print(greet("Alex"))'
    ]
  },
  {
    id: 'py6',
    courseId: '2',
    title: 'Lists',
    content: [
      'Lists store multiple items in a single variable.',
      'Access items with indices and modify using append(), remove(), sort().',
      'Example: fruits = ["apple","banana","orange"]; print(fruits[1]); fruits.append("grape")'
    ]
  },
  {
    id: 'py7',
    courseId: '2',
    title: 'Tuples & Sets',
    content: [
      'Tuples are immutable sequences, sets store unique items.',
      'Use tuples for fixed data and sets to avoid duplicates.',
      'Example: coords = (10,20); unique_numbers = {1,2,3,3}; print(coords, unique_numbers)'
    ]
  },
  {
    id: 'py8',
    courseId: '2',
    title: 'Dictionaries',
    content: [
      'Dictionaries store data as key-value pairs.',
      'Access values using keys.',
      'Example: person = {"name":"Alex","age":15}; print(person["name"])'
    ]
  },
  {
    id: 'py9',
    courseId: '2',
    title: 'Modules & Packages',
    content: [
      'Modules are Python files with reusable code; packages are collections of modules.',
      'Example: import math; print(math.sqrt(16))'
    ]
  },
  {
    id: 'py10',
    courseId: '2',
    title: 'File Handling',
    content: [
      'Python can read and write files using open(), read(), write().',
      'Always close files or use context managers.',
      'Example: with open("data.txt","w") as file: file.write("Hello!")'
    ]
  },

  // ================= Java (id: '4') =================
  {
    id: 'java1',
    courseId: '4',
    title: 'Introduction to Java',
    content: [
      'Java is a widely-used, object-oriented programming language.',
      'It runs on the JVM and is platform-independent.',
      'Example: System.out.println("Hello, Java!");'
    ]
  },
  {
    id: 'java2',
    courseId: '4',
    title: 'Variables & Data Types',
    content: [
      'Variables store data in Java programs.',
      'Types include int, double, char, boolean, and String.',
      'Example: int age = 15; String name = "Alex"; System.out.println(name + " is " + age);'
    ]
  },
  {
    id: 'java3',
    courseId: '4',
    title: 'Operators',
    content: [
      'Operators perform operations on values.',
      'Arithmetic: +, -, *, /; Comparison: ==, !=; Logical: &&, ||, !',
      'Example: int a=5,b=3; System.out.println(a+b); System.out.println(a>b);'
    ]
  },
  {
    id: 'java4',
    courseId: '4',
    title: 'Control Flow',
    content: [
      'Control flow determines which code runs.',
      'Use if, else, switch, for, while.',
      'Example: for(int i=0;i<5;i++){ System.out.println(i); }'
    ]
  },
  {
    id: 'java5',
    courseId: '4',
    title: 'Methods',
    content: [
      'Methods are reusable blocks of code.',
      'They can take parameters and return values.',
      'Example: public static int add(int a,int b){return a+b;} System.out.println(add(5,3));'
    ]
  },
  {
    id: 'java6',
    courseId: '4',
    title: 'Arrays',
    content: [
      'Arrays store multiple elements of the same type.',
      'Example: int[] numbers = {1,2,3,4}; System.out.println(numbers[2]);'
    ]
  },
  {
    id: 'java7',
    courseId: '4',
    title: 'OOP Basics',
    content: [
      'Java uses classes and objects.',
      'Example: class Person{ String name; int age;} Person p = new Person(); p.name="Alex"; p.age=15;'
    ]
  },
  {
    id: 'java8',
    courseId: '4',
    title: 'Inheritance',
    content: [
      'Inheritance allows a class to acquire properties of another class.',
      'Example: class Dog extends Animal { void bark() { System.out.println("Barking"); } }'
    ]
  },
  {
    id: 'java9',
    courseId: '4',
    title: 'Interfaces',
    content: [
      'Interfaces define methods a class must implement.',
      'Example: interface Drawable { void draw(); } class Circle implements Drawable { public void draw(){ System.out.println("Drawing"); } }'
    ]
  },
  {
    id: 'java10',
    courseId: '4',
    title: 'Exceptions',
    content: [
      'Exceptions handle runtime errors.',
      'Example: try { int result = 10/0; } catch(ArithmeticException e){ System.out.println("Cannot divide by zero"); }'
    ]
  },

  // ================= C++ (id: '5') =================
  {
    id: 'cpp1',
    courseId: '5',
    title: 'Introduction to C++',
    content: [
      'C++ is a high-performance language supporting procedural and OOP.',
      'Example: #include <iostream>\nint main(){ std::cout << "Hello, C++!"; return 0; }'
    ]
  },
  {
    id: 'cpp2',
    courseId: '5',
    title: 'Variables & Data Types',
    content: [
      'Variables store data; types: int, float, double, char, string.',
      'Example: int age=15; std::string name="Alex"; std::cout<<name<<age;'
    ]
  },
  {
    id: 'cpp3',
    courseId: '5',
    title: 'Operators',
    content: [
      'Operators perform operations on values.',
      'Example: int a=5,b=3; std::cout<<a+b; std::cout<<(a>b);'
    ]
  },
  {
    id: 'cpp4',
    courseId: '5',
    title: 'Control Flow',
    content: [
      'Control flow determines which code executes.',
      'Example: for(int i=0;i<5;i++){ std::cout<<i; }'
    ]
  },
  {
    id: 'cpp5',
    courseId: '5',
    title: 'Functions',
    content: [
      'Functions are reusable code blocks.',
      'Example: int add(int a,int b){ return a+b; } std::cout<<add(5,3);'
    ]
  },
  {
    id: 'cpp6',
    courseId: '5',
    title: 'Arrays & Vectors',
    content: [
      'Arrays store multiple elements; vectors are dynamic arrays.',
      'Example: int numbers[3]={1,2,3}; std::vector<int> v={1,2,3}; v.push_back(4);'
    ]
  },
  {
    id: 'cpp7',
    courseId: '5',
    title: 'Pointers',
    content: [
      'Pointers store memory addresses.',
      'Example: int a=10; int* ptr=&a; std::cout<<*ptr;'
    ]
  },
  {
    id: 'cpp8',
    courseId: '5',
    title: 'Classes & OOP',
    content: [
      'C++ uses classes and objects.',
      'Example: class Person{ public: std::string name; int age; }; Person p; p.name="Alex"; p.age=15;'
    ]
  },
  {
    id: 'cpp9',
    courseId: '5',
    title: 'Inheritance',
    content: [
      'Inheritance allows a class to acquire another class properties.',
      'Example: class Dog: public Animal { void bark(){ std::cout<<"Bark"; } };'
    ]
  },
  {
    id: 'cpp10',
    courseId: '5',
    title: 'File Handling',
    content: [
      'C++ can read/write files using fstream.',
      'Example: std::ofstream file("data.txt"); file<<"Hello!"; file.close();'
    ]
  },

  // ================= React Native (id: '3') =================
  {
    id: 'react1',
    courseId: '3',
    title: 'Introduction to React Native',
    content: [
      'React Native allows building mobile apps using JavaScript.',
      'One codebase works for iOS and Android.',
      'Example: import { Text } from "react-native"; <Text>Hello React Native!</Text>'
    ]
  },
  {
    id: 'react2',
    courseId: '3',
    title: 'Components',
    content: [
      'Components are reusable UI blocks.',
      'They can be functional or class components.',
      'Example: function Greeting(){ return <Text>Hello</Text>; }'
    ]
  },
  {
    id: 'react3',
    courseId: '3',
    title: 'JSX',
    content: [
      'JSX lets you write HTML-like code inside JavaScript.',
      'Example: const element = <Text>Hello JSX</Text>;'
    ]
  },
  {
    id: 'react4',
    courseId: '3',
    title: 'Props',
    content: [
      'Props pass data from parent to child components.',
      'Example: <Greeting name="Alex" /> function Greeting(props){ return <Text>{props.name}</Text>; }'
    ]
  },
  {
    id: 'react5',
    courseId: '3',
    title: 'State',
    content: [
      'State allows components to manage dynamic data.',
      'Example: const [count,setCount] = useState(0);'
    ]
  },
  {
    id: 'react6',
    courseId: '3',
    title: 'useEffect',
    content: [
      'useEffect performs side effects in functional components.',
      'Example: useEffect(()=>{ console.log("Mounted"); },[]);'
    ]
  },
  {
    id: 'react7',
    courseId: '3',
    title: 'Events & Forms',
    content: [
      'React Native handles events like onPress.',
      'Example: <Button onPress={()=>alert("Clicked")} title="Click Me"/>'
    ]
  },
  {
    id: 'react8',
    courseId: '3',
    title: 'Conditional Rendering',
    content: [
      'Show UI based on conditions.',
      'Example: {isLoggedIn ? <Text>Welcome</Text> : <Text>Login</Text>}'
    ]
  },
  {
    id: 'react9',
    courseId: '3',
    title: 'Lists & Keys',
    content: [
      'Render multiple items with unique keys.',
      'Example: data.map(item => <Text key={item.id}>{item.name}</Text>)'
    ]
  },
  {
    id: 'react10',
    courseId: '3',
    title: 'Navigation',
    content: [
      'React Navigation allows moving between screens.',
      'Example: navigation.navigate("Home");'
    ]
  }
];
