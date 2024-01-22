// import React from "react";

// interface ScrollbarProps {
//   children: React.ReactNode;
// }

// const Scrollbar: React.FC<ScrollbarProps> = ({ children }) => {
//   const contentRef = React.useRef<HTMLDivElement>(null);
//   const scrollTrackRef = React.useRef<HTMLDivElement>(null);
//   const scrollThumbRef = React.useRef<HTMLDivElement>(null);
//   const observer = React.useRef<ResizeObserver | null>(null);

//   const [thumbHeight, setThumbHeight] = React.useState<number>(20);
//   const [isDragging, setIsDragging] = React.useState<boolean>(false);
//   const [scrollStartPosition, setScrollStartPosition] = React.useState<number>(0);
//   const [initialContentScrollTop, setInitialContentScrollTop] = React.useState<number>(0);

//   function handleResize() {
//     if (scrollTrackRef.current && contentRef.current) {
//       const { clientHeight: trackSize } = scrollTrackRef.current;
//       const { clientHeight: contentVisible, scrollHeight: contentTotalHeight } = contentRef.current;
//       setThumbHeight(
//         Math.max((contentVisible / contentTotalHeight ) * trackSize, 20)
//       );
//     }
//   }

//   function handleThumbPosition() {
//     if(
//       !contentRef.current ||
//       !scrollTrackRef.current ||
//       !scrollThumbRef.current
//     ) {
//       return;
//     }

//     const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current;
//     const { clientHeight: trackHeight } = scrollTrackRef.current;

//     let newTop = (contentTop / contentHeight) * trackHeight;
//     newTop = Math.min(newTop, trackHeight - thumbHeight);

//     const thumb = scrollThumbRef.current;
//     requestAnimationFrame(() => {
//       thumb.style.top = `${newTop}px`;
//     });
//   }

//   function handleThumbMouseDown(e: React.MouseEvent<HTMLDivElement>) {
//     e.preventDefault();
//     e.stopPropagation();
//     setScrollStartPosition(e.clientY);
//     if(contentRef.current)
//       setInitialContentScrollTop(contentRef.current.scrollTop);
//     setIsDragging(true);
//   }

//   function handleThumbMouseUp(e: MouseEvent) {
//     e.preventDefault();
//     e.stopPropagation();
//     if(isDragging) {
//       setIsDragging(false);
//     }
//   }

//   function handleThumbMouseMove(e: MouseEvent) {
//     if(contentRef.current) {
//       e.preventDefault();
//       e.stopPropagation();
//       if(isDragging) {
//         const { 
//           scrollHeight: contentScrollHeight,
//           clientHeight: contentClientHeight,
//         } = contentRef.current;

//         const deltaY = 
//           (e.clientY - scrollStartPosition) *
//           (contentClientHeight / thumbHeight);

//         const newScrollTop = Math.min(
//           initialContentScrollTop + deltaY,
//           contentScrollHeight - contentClientHeight
//         );

//         contentRef.current.scrollTop = newScrollTop;
//       }
//     }
//   }

//   function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
//     e.preventDefault();
//     e.stopPropagation();
//     const { current: track } = scrollTrackRef;
//     const { current: content } = contentRef;
//     if(track && content) {
//       const { clientY } = e;
//       const target = e.target as HTMLDivElement;
//       const rect = target.getBoundingClientRect();
//       const trackTop = rect.top;
//       const thumbOffset = -(thumbHeight / 2);
//       const clickRatio = (clientY - trackTop + thumbOffset) / track.clientHeight;
//       const scrollAmount = Math.floor(clickRatio * content.scrollHeight);
//       content.scrollTo({
//         top: scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   }

//   function handleScrollButton(direction: 'up' | 'down') {
//     const { current: content } = contentRef;
//     if (content) {
//       const scrollAmount = direction === 'down' ? 200 : -200;
//       content.scrollBy({ top: scrollAmount, behavior: 'smooth' });
//     }
//   }

//   React.useEffect(() => {
//     document.addEventListener('mousemove', handleThumbMouseMove);
//     document.addEventListener('mouseup', handleThumbMouseUp);
//   }, [handleThumbMouseMove, handleThumbMouseUp]);

//   React.useEffect(() => {

//   }, []);

//   return (
    
//   );
// };

// export default Scrollbar;
