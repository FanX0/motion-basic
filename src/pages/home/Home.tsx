import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <motion.div className="w-20 h-20 bg-red-500" initial={{ rotate:0 }} animate={{ rotate:360 }} transition={{ duration:100 }}/>
    </div>
  );
};

export default Home;
