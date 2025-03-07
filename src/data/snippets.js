// src/data/snippets.js
export const snippets = [
  {
    id: "flutter-stateless-widget",
    title: "Flutter Stateless Widget",
    description: "Basic template for a Flutter Stateless Widget",
    language: "dart",
    code: `import 'package:flutter/material.dart';

class MyStatelessWidget extends StatelessWidget {
final String title;

const MyStatelessWidget({
Key? key,
required this.title,
}) : super(key: key);

@override
Widget build(BuildContext context) {
return Container(
  padding: const EdgeInsets.all(16.0),
  child: Text(
    title,
    style: Theme.of(context).textTheme.headline6,
  ),
);
}
}`,
  },
  {
    id: "flutter-stateful-widget",
    title: "Flutter Stateful Widget",
    description: "Basic template for a Flutter Stateful Widget",
    language: "dart",
    code: `import 'package:flutter/material.dart';

class MyStatefulWidget extends StatefulWidget {
final String title;

const MyStatefulWidget({
Key? key,
required this.title,
}) : super(key: key);

@override
_MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
int _counter = 0;

void _incrementCounter() {
setState(() {
  _counter++;
});
}

@override
Widget build(BuildContext context) {
return Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: <Widget>[
    Text(
      widget.title,
      style: Theme.of(context).textTheme.headline6,
    ),
    Text(
      '$_counter',
      style: Theme.of(context).textTheme.headline4,
    ),
    ElevatedButton(
      onPressed: _incrementCounter,
      child: const Text('Increment'),
    ),
  ],
);
}
}`,
  },
  {
    id: "flutter-custom-appbar",
    title: "Flutter Custom AppBar",
    description: "Create a custom AppBar in Flutter",
    language: "dart",
    code: `AppBar(
elevation: 0,
backgroundColor: Colors.transparent,
leading: IconButton(
icon: const Icon(Icons.menu, color: Colors.black87),
onPressed: () {
  // Open drawer or perform action
},
),
title: Text(
'App Title',
style: const TextStyle(
  color: Colors.black87, 
  fontWeight: FontWeight.bold,
),
),
actions: [
IconButton(
  icon: const Icon(Icons.notifications, color: Colors.black87),
  onPressed: () {
    // Show notifications
  },
),
IconButton(
  icon: const Icon(Icons.settings, color: Colors.black87),
  onPressed: () {
    // Open settings
  },
),
],
)`,
  },
  {
    id: "flutter-card-ui",
    title: "Flutter Card UI",
    description: "Create a beautiful card UI in Flutter",
    language: "dart",
    code: `Card(
elevation: 4.0,
shape: RoundedRectangleBorder(
borderRadius: BorderRadius.circular(16.0),
),
child: Container(
padding: const EdgeInsets.all(16.0),
child: Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Row(
      children: [
        CircleAvatar(
          radius: 24,
          backgroundImage: NetworkImage('https://via.placeholder.com/150'),
        ),
        const SizedBox(width: 16),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Card Title',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              'Subtitle',
              style: TextStyle(
                color: Colors.grey[600],
              ),
            ),
          ],
        ),
      ],
    ),
    const SizedBox(height: 16),
    Text(
      'This is the main content of the card. You can add any widgets here.',
      style: TextStyle(height: 1.5),
    ),
    const SizedBox(height: 16),
    Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        TextButton(
          onPressed: () {},
          child: const Text('CANCEL'),
        ),
        const SizedBox(width: 8),
        ElevatedButton(
          onPressed: () {},
          child: const Text('ACCEPT'),
        ),
      ],
    ),
  ],
),
),
)`,
  },
  {
    id: "flutter-form-validation",
    title: "Flutter Form Validation",
    description: "Example of form validation in Flutter",
    language: "dart",
    code: `// Create a Form widget
final _formKey = GlobalKey<FormState>();

Form(
key: _formKey,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: <Widget>[
  TextFormField(
    decoration: const InputDecoration(
      hintText: 'Enter your email',
      labelText: 'Email',
    ),
    validator: (value) {
      if (value == null || value.isEmpty) {
        return 'Please enter your email';
      }
      if (!RegExp(r'^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[a-zA-Z]+').hasMatch(value)) {
        return 'Please enter a valid email address';
      }
      return null;
    },
  ),
  TextFormField(
    obscureText: true,
    decoration: const InputDecoration(
      hintText: 'Enter your password',
      labelText: 'Password',
    ),
    validator: (value) {
      if (value == null || value.isEmpty) {
        return 'Please enter your password';
      }
      if (value.length < 6) {
        return 'Password must be at least 6 characters';
      }
      return null;
    },
  ),
  Padding(
    padding: const EdgeInsets.symmetric(vertical: 16.0),
    child: ElevatedButton(
      onPressed: () {
        // Validate returns true if the form is valid, or false otherwise
        if (_formKey.currentState!.validate()) {
          // Process data
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Processing Data')),
          );
        }
      },
      child: const Text('Submit'),
    ),
  ),
],
),
)`,
  },
];
