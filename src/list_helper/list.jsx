const WidgetList = {
  1: {
    id: 1,
    name: "Custom Container",
    code: `import 'package:flutter/material.dart';

class CustomContainer extends StatelessWidget {
  const CustomContainer(
      {super.key,
      this.alignment,
      this.child,
      this.constraints,
      this.height,
      this.width,
      this.margin,
      this.padding,
      this.borderColor,
      this.borderWidth,
      this.image,
      this.backGroundColor,
      this.borderRadius,
      this.boxShadow,
      this.shape = BoxShape.rectangle,
      this.gradient});
  final AlignmentGeometry? alignment;
  final Widget? child;
  final BoxConstraints? constraints;
  final double? height;
  final double? width;
  final EdgeInsetsGeometry? margin;
  final EdgeInsetsGeometry? padding;
  final Color? borderColor;
  final double? borderWidth;
  final DecorationImage? image;
  final Color? backGroundColor;
  final BorderRadiusGeometry? borderRadius;
  final List<BoxShadow>? boxShadow;
  final BoxShape shape;
  final Gradient? gradient;
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: alignment,
      constraints: constraints,
      height: height,
      width: width,
      margin: margin,
      padding: padding,
      decoration: BoxDecoration(
          border: Border.all(
            color: borderColor ?? Colors.transparent,
            width: borderWidth ?? 2,
          ),
          borderRadius: borderRadius,
          color: backGroundColor,
          image: image,
          shape: shape,
          gradient: gradient,
          boxShadow: boxShadow),
      child: child,
    );
  }
}

class CustomAnimatedContainer extends StatelessWidget {
  const CustomAnimatedContainer(
      {super.key,
      this.alignment,
      this.child,
      this.constraints,
      this.height,
      this.width,
      this.margin,
      this.padding,
      this.borderColor,
      this.borderWidth,
      this.image,
      this.backGroundColor,
      this.borderRadius,
      this.boxShadow,
      this.shape = BoxShape.rectangle,
      this.gradient,
      this.duration});
  final AlignmentGeometry? alignment;
  final Widget? child;
  final BoxConstraints? constraints;
  final double? height;
  final double? width;
  final EdgeInsetsGeometry? margin;
  final EdgeInsetsGeometry? padding;
  final Color? borderColor;
  final double? borderWidth;
  final DecorationImage? image;
  final Color? backGroundColor;
  final BorderRadiusGeometry? borderRadius;
  final List<BoxShadow>? boxShadow;
  final BoxShape shape;
  final Gradient? gradient;
  final Duration? duration;
  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: duration ?? Duration(milliseconds: 300),
      alignment: alignment,
      constraints: constraints,
      height: height,
      width: width,
      margin: margin,
      padding: padding,
      decoration: BoxDecoration(
          border: Border.all(
            color: borderColor ?? Colors.transparent,
            width: borderWidth ?? 2,
          ),
          borderRadius: borderRadius,
          color: backGroundColor,
          image: image,
          shape: shape,
          gradient: gradient,
          boxShadow: boxShadow),
      child: child,
    );
  }
}`,
  },
  2: {
    id: 2,
    name: "Custom Pagination",
    code: `import 'dart:async';
import 'package:flutter/material.dart';
import 'package:infinite_scroll_pagination/infinite_scroll_pagination.dart';

class InfiniteScrollList<T> extends StatefulWidget {
  final Widget Function(BuildContext, T, int) itemBuilder;
  final int pageSize;
  final void Function() fetchNextPage;
  final PagingState<int, T> state;
  const InfiniteScrollList({
    required this.itemBuilder,
    this.pageSize = 10,
    required this.fetchNextPage,
    required this.state,
    super.key,
  });

  @override
  _InfiniteScrollListState<T> createState() => _InfiniteScrollListState<T>();
}

class _InfiniteScrollListState<T> extends State<InfiniteScrollList<T>> {
  @override
  Widget build(BuildContext context) {
    return PagedListView<int, T>(
      state: widget.state,
      fetchNextPage: widget.fetchNextPage,
      builderDelegate: PagedChildBuilderDelegate<T>(
        itemBuilder: widget.itemBuilder,
        firstPageErrorIndicatorBuilder: (_) =>
            Center(child: Text("Error loading data")),
        noItemsFoundIndicatorBuilder: (_) =>
            Center(child: Text("No items available")),
      ),
    );
  }
}`,
  },
};
export default WidgetList;
