import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

// Masked line-by-line word reveal used for headings.
// The in-view trigger sits on the (visible) clipping wrapper: the inner line
// starts translated out of it, so observing the line itself never fires.
export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <motion.span
    className="block overflow-hidden"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
  >
    <motion.span
      className={`block ${className}`}
      variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </motion.span>
);
