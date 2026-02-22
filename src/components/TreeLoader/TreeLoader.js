import React from 'react';
import { motion } from 'framer-motion';
import { LoaderOverlay, TreeSVG } from './TreeLoader.styles';

// --- ANIMATION VARIANTS ---

// 1. Branch drawing physics
const branchDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: custom.delay, duration: 1.2, ease: "easeOut" },
      opacity: { delay: custom.delay, duration: 0.1 }
    }
  })
};

// 2. Leaf blooming physics (pops in with a tiny spring bounce)
const leafDraw = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom.delay,
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  })
};

// --- SVG PATH DATA ---

const treeBranches = [
  // Trunk
  { id: 'b1', d: "M 50 100 Q 48 80 50 60", delay: 0, width: 3 },
  // Main Arteries 
  { id: 'b2', d: "M 50 60 Q 35 50 20 40", delay: 0.3, width: 2.2 },
  { id: 'b3', d: "M 50 60 Q 60 55 75 45", delay: 0.4, width: 2.2 },
  { id: 'b4', d: "M 50 60 Q 45 40 48 25", delay: 0.5, width: 2.2 },
  // Secondary Branches 
  { id: 'b5', d: "M 32 50 Q 20 35 10 30", delay: 0.7, width: 1.5 },
  { id: 'b6', d: "M 23 42 Q 25 25 15 15", delay: 0.9, width: 1.5 },
  { id: 'b7', d: "M 65 52 Q 80 40 90 35", delay: 0.8, width: 1.5 },
  { id: 'b8', d: "M 70 47 Q 75 30 85 20", delay: 1.0, width: 1.5 },
  { id: 'b9', d: "M 49 40 Q 35 25 30 15", delay: 1.1, width: 1.5 },
  { id: 'b10', d: "M 48 35 Q 60 25 65 10", delay: 1.2, width: 1.5 },
  // Outer Twigs 
  { id: 'b11', d: "M 13 32 Q 10 25 5 22", delay: 1.3, width: 1 },
  { id: 'b12', d: "M 80 38 Q 88 30 95 25", delay: 1.4, width: 1 },
  { id: 'b13', d: "M 35 28 Q 30 15 22 10", delay: 1.4, width: 1 },
  { id: 'b14', d: "M 62 21 Q 70 15 75 5", delay: 1.5, width: 1 },
  { id: 'b15', d: "M 48 25 Q 45 15 50 5", delay: 1.6, width: 1 }
];

// Mapped coordinates perfectly matching the final (x,y) of the branches above
const treeLeaves = [
  // Outer twig leaves (pop slightly after branch finishes drawing: branch delay + ~1s)
  { id: 'l1', cx: 5, cy: 22, delay: 2.3, r: 1.8 },
  { id: 'l2', cx: 95, cy: 25, delay: 2.4, r: 1.8 },
  { id: 'l3', cx: 22, cy: 10, delay: 2.4, r: 1.5 },
  { id: 'l4', cx: 75, cy: 5, delay: 2.5, r: 1.5 },
  { id: 'l5', cx: 50, cy: 5, delay: 2.6, r: 1.8 },
  // Inner secondary branch leaves (for fullness)
  { id: 'l6', cx: 15, cy: 15, delay: 2.0, r: 1.2 }, 
  { id: 'l7', cx: 90, cy: 35, delay: 1.9, r: 1.2 }, 
  { id: 'l8', cx: 85, cy: 20, delay: 2.1, r: 1.2 }, 
  { id: 'l9', cx: 30, cy: 15, delay: 2.2, r: 1.2 }, 
  { id: 'l10', cx: 65, cy: 10, delay: 2.3, r: 1.2 }, 
];

const TreeLoader = () => {
  return (
    <LoaderOverlay
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <TreeSVG 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Render Branches */}
        {treeBranches.map((branch) => (
          <motion.path 
            key={branch.id}
            d={branch.d} 
            strokeWidth={branch.width}
            variants={branchDraw} 
            custom={{ delay: branch.delay }} 
            initial="hidden"
            animate="visible"
          />
        ))}

        {/* Render Leaves (Blossoms) */}
        {treeLeaves.map((leaf) => (
          <motion.circle
            key={leaf.id}
            cx={leaf.cx}
            cy={leaf.cy}
            r={leaf.r}
            // Uses the Artist Mode accent color (#ff4d4d) 
            // Add stroke="none" so they are filled solid circles
            fill="var(--accent-color)" 
            stroke="none"
            variants={leafDraw}
            custom={{ delay: leaf.delay }}
            initial="hidden"
            animate="visible"
          />
        ))}
      </TreeSVG>
    </LoaderOverlay>
  );
};

export default TreeLoader;