// src/data/pages.js
export const pages = [
  {
    id: "flutter-widgets",
    title: "Essential Flutter Widgets",
    description:
      "Guide to the most commonly used widgets in Flutter development.",
    tags: ["widgets", "UI", "beginner"],
    content: [
      {
        type: "text",
        content: `<h2>Introduction to Flutter Widgets</h2>
          <p>Widgets are the building blocks of Flutter applications. Everything in Flutter is a widget! This guide covers the most essential widgets you'll use in your Flutter projects.</p>`,
      },
      {
        type: "text",
        content: `<h3>Container Widget</h3>
          <p>The Container widget is one of the most versatile widgets in Flutter. It combines common painting, positioning, and sizing functionality.</p>`,
      },
      {
        type: "code",
        title: "Basic Container Example",
        language: "dart",
        content: `Container(
    margin: EdgeInsets.all(10.0),
    padding: EdgeInsets.all(16.0),
    decoration: BoxDecoration(
      color: Colors.blue,
      borderRadius: BorderRadius.circular(8.0),
      boxShadow: [
        BoxShadow(
          color: Colors.black26,
          blurRadius: 10.0,
          offset: Offset(0, 5),
        ),
      ],
    ),
    child: Text(
      'Hello Flutter!',
      style: TextStyle(
        color: Colors.white,
        fontSize: 18.0,
      ),
    ),
  )`,
      },
      {
        type: "text",
        content: `<h3>Row and Column Widgets</h3>
          <p>Row and Column widgets are used to arrange widgets horizontally and vertically respectively.</p>`,
      },
      {
        type: "code",
        title: "Basic Row Example",
        language: "dart",
        content: `Row(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: [
      Icon(Icons.star, color: Colors.yellow),
      Icon(Icons.star, color: Colors.yellow),
      Icon(Icons.star, color: Colors.yellow),
    ],
  )`,
      },
      {
        type: "code",
        title: "Basic Column Example",
        language: "dart",
        content: `Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text('Title', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
      SizedBox(height: 8),
      Text('Subtitle', style: TextStyle(fontSize: 14, color: Colors.grey)),
      SizedBox(height: 16),
      Text('This is the main content of the widget...'),
    ],
  )`,
      },
    ],
  },
  {
    id: "flutter-navigation",
    title: "Flutter Navigation & Routing",
    description:
      "Learn how to implement navigation between screens in Flutter.",
    tags: ["navigation", "routing", "intermediate"],
    content: [
      {
        type: "text",
        content: `<h2>Flutter Navigation</h2>
          <p>Navigation is an essential part of any mobile application. Flutter provides several ways to navigate between screens.</p>`,
      },
      {
        type: "text",
        content: `<h3>Basic Navigation</h3>
          <p>The simplest way to navigate to a new screen is using the Navigator.push method.</p>`,
      },
      {
        type: "code",
        title: "Navigate to a New Screen",
        language: "dart",
        content: `// Button that navigates to a new screen
  ElevatedButton(
    onPressed: () {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => SecondScreen()),
      );
    },
    child: Text('Go to Second Screen'),
  )`,
      },
      {
        type: "code",
        title: "Return from a Screen",
        language: "dart",
        content: `// Button that returns to the previous screen
  ElevatedButton(
    onPressed: () {
      Navigator.pop(context);
    },
    child: Text('Go Back'),
  )`,
      },
      {
        // src/data/pages.js (continued)
        id: "flutter-navigation",
        title: "Flutter Navigation & Routing",
        description:
          "Learn how to implement navigation between screens in Flutter.",
        tags: ["navigation", "routing", "intermediate"],
        content: [
          {
            type: "text",
            content: `<h2>Flutter Navigation</h2>
        <p>Navigation is an essential part of any mobile application. Flutter provides several ways to navigate between screens.</p>`,
          },
          {
            type: "text",
            content: `<h3>Basic Navigation</h3>
        <p>The simplest way to navigate to a new screen is using the Navigator.push method.</p>`,
          },
          {
            type: "code",
            title: "Navigate to a New Screen",
            language: "dart",
            content: `// Button that navigates to a new screen
ElevatedButton(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => SecondScreen()),
    );
  },
  child: Text('Go to Second Screen'),
)`,
          },
          {
            type: "code",
            title: "Return from a Screen",
            language: "dart",
            content: `// Button that returns to the previous screen
ElevatedButton(
  onPressed: () {
    Navigator.pop(context);
  },
  child: Text('Go Back'),
)`,
          },
          {
            type: "text",
            content: `<h3>Named Routes</h3>
        <p>For more complex applications, you might want to use named routes. This allows you to define your routes in one place and navigate to them by name.</p>`,
          },
          {
            type: "code",
            title: "Setting Up Named Routes",
            language: "dart",
            content: `// In your MaterialApp widget
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => HomeScreen(),
    '/second': (context) => SecondScreen(),
    '/third': (context) => ThirdScreen(),
  },
)`,
          },
          {
            type: "code",
            title: "Navigating with Named Routes",
            language: "dart",
            content: `// Navigate to a named route
ElevatedButton(
  onPressed: () {
    Navigator.pushNamed(context, '/second');
  },
  child: Text('Go to Second Screen'),
)`,
          },
        ],
      },
      {
        id: "state-management",
        title: "Flutter State Management",
        description:
          "Different approaches to manage state in Flutter applications.",
        tags: ["state", "advanced", "provider"],
        content: [
          {
            type: "text",
            content: `<h2>State Management in Flutter</h2>
        <p>State management is one of the most important aspects of building Flutter applications. There are several approaches to manage state in Flutter.</p>`,
          },
          {
            type: "text",
            content: `<h3>Provider</h3>
        <p>Provider is a simple yet powerful state management solution. It's recommended by the Flutter team.</p>`,
          },
          {
            type: "code",
            title: "Setting Up Provider",
            language: "dart",
            content: `// Add provider to your pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  provider: ^6.0.0`,
          },
          {
            type: "code",
            title: "Creating a Model",
            language: "dart",
            content: `// counter_model.dart
import 'package:flutter/foundation.dart';

class CounterModel extends ChangeNotifier {
  int _count = 0;
  
  int get count => _count;
  
  void increment() {
    _count++;
    notifyListeners();
  }
}`,
          },
          {
            type: "code",
            title: "Setting Up the Provider",
            language: "dart",
            content: `// main.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'counter_model.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}`,
          },
          {
            type: "code",
            title: "Using the Provider",
            language: "dart",
            content: `// Accessing the model in a widget
Consumer<CounterModel>(
  builder: (context, counter, child) {
    return Text(
      'Count: \${counter.count}',
      style: TextStyle(fontSize: 24),
    );
  },
),

// Modify the state
ElevatedButton(
  onPressed: () {
    Provider.of<CounterModel>(context, listen: false).increment();
  },
  child: Text('Increment'),
)`,
          },
        ],
      },
    ],
  },
];
