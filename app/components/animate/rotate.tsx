import Greeting from "../common/greeting";
import * as motion from "motion/react-client";

const Rotate = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3 }}>
            <Greeting />
        </motion.div>
    );
}

export default Rotate;