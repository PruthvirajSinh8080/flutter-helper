import React from "react";
import CodeSnippet from "../components/code_snippet_component";

export default function CustomTextField() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Custom Container</h1>
      <CodeSnippet code={snippet[0]} language={"dart"}></CodeSnippet>
    </>
  );
}

const snippet = [
  `import 'package:flutter/material.dart';
import 'package:fruit_fusion_veggies_delight/providers/localization_provider/localization_provider.dart';
import 'package:fruit_fusion_veggies_delight/utils/border_helper/border_helper.dart';
import 'package:provider/provider.dart';
import '../app_const/app_colors.dart'; // For keyboard input types

// Custom Text Form Field widget
class CustomTextFormField extends StatelessWidget {
  final TextEditingController? controller;
  final FocusNode? focusNode;
  final bool autocorrect;
  final Color? cursorColor;
  final TextInputType? keyboardType;
  final bool obscureText;
  final int? maxLength;
  final int? maxLines;
  final int? minLines;
  final bool readOnly;
  final TextStyle? style;
  final TextAlign textAlign;
  final String? Function(String?)? validator;
  final String? labelText;
  final String? hintText;
  final InputDecoration? decoration;
  final bool enabled;

  const CustomTextFormField(
      {super.key,
      required this.controller,
      this.focusNode,
      this.autocorrect = true,
      this.cursorColor,
      this.keyboardType,
      this.obscureText = false,
      this.maxLength,
      this.maxLines = 1,
      this.minLines = 1,
      this.readOnly = false,
      this.style,
      this.textAlign = TextAlign.start,
      required this.validator,
      this.decoration,
      this.enabled = true,
      this.hintText,
      this.labelText});

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      autocorrect: autocorrect,
      controller: controller,
      buildCounter: (context,
              {required currentLength,
              required isFocused,
              required maxLength}) =>
          null,
      cursorColor: AppColors.primaryColor,
      cursorErrorColor: AppColors.errorColor,
      enabled: enabled,
      decoration: decoration ??
          BorderHelper.textFormFieldPrimary(
              label: labelText,
              hintText: context
                  .watch<LocalizationProvider>()
                  .translate(hintText ?? "")),
      focusNode: focusNode,
      keyboardType: keyboardType ?? TextInputType.text,
      obscureText: obscureText,
      onTapOutside: (event) => Navigator.of(context).focusNode.unfocus(),
      maxLength: maxLength,
      maxLines: maxLines,
      minLines: minLines,
      readOnly: readOnly,
      style: style,
      textAlign: textAlign,
      validator: validator,
    );
  }
}`,
];
