import React from 'react';
import { motion } from 'framer-motion';
import { LoaderOverlay, TreeSVG } from './TreeLoader.styles';

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

// 2. Realistic Leaf physics
const leafDraw = {
  // We use custom props to set the exact position, scale, and rotation
  hidden: (custom) => ({ 
    scale: 0, 
    opacity: 0, 
    x: custom.x, 
    y: custom.y, 
    rotate: custom.rotate 
  }),
  visible: (custom) => ({
    scale: custom.scale,
    opacity: 1,
    x: custom.x,
    y: custom.y,
    rotate: custom.rotate,
    transition: {
      delay: custom.delay,
      type: "spring",
      stiffness: 250,
      damping: 15
    }
  })
};

// --- SVG PATH DATA ---

const treeBranches = [
  // Trunk & Main Arteries
  { id: 'b1', d: "M 50 100 Q 48 80 50 60", delay: 0, width: 3 },
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

// Mapped coordinates with specific rotation angles so they point organically
const treeLeaves = [
  { id: 'l1', x: 5, y: 22, delay: 2.3, scale: 0.6, rotate: -70 },
  { id: 'l2', x: 95, y: 25, delay: 2.4, scale: 0.6, rotate: 70 },
  { id: 'l3', x: 22, y: 10, delay: 2.4, scale: 0.5, rotate: -40 },
  { id: 'l4', x: 75, y: 5, delay: 2.5, scale: 0.5, rotate: 45 },
  { id: 'l5', x: 50, y: 5, delay: 2.6, scale: 0.6, rotate: 0 },
  { id: 'l6', x: 15, y: 15, delay: 2.0, scale: 0.4, rotate: -55 }, 
  { id: 'l7', x: 90, y: 35, delay: 1.9, scale: 0.4, rotate: 60 }, 
  { id: 'l8', x: 85, y: 20, delay: 2.1, scale: 0.4, rotate: 30 }, 
  { id: 'l9', x: 30, y: 15, delay: 2.2, scale: 0.4, rotate: -25 }, 
  { id: 'l10', x: 65, y: 10, delay: 2.3, scale: 0.4, rotate: 20 }, 
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

        {treeLeaves.map((leaf) => (
          <motion.path
            key={leaf.id}
            // A beautiful almond/petal shape originating at 0,0
            d="M 0 0 C -4 -4 -4 -12 0 -16 C 4 -12 4 -4 0 0" 
            fill="var(--accent-color)" 
            stroke="none"
            variants={leafDraw}
            custom={{ delay: leaf.delay, x: leaf.x, y: leaf.y, rotate: leaf.rotate, scale: leaf.scale }}
            initial="hidden"
            animate="visible"
            // Ensure the transform origin is at the base of the leaf so it rotates properly
            style={{ originX: 0, originY: 0 }} 
          />
        ))}
      </TreeSVG>
    </LoaderOverlay>
  );
};

export default TreeLoader;