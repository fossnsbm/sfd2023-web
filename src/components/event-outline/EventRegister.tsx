"use client";

import { BsArrowRight } from "react-icons/bs";
import { TbChevronRight } from "react-icons/tb";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const EventRegister = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push("/events/sfd-2023/register");
  };
  return (
    <div className="flex text-white flex-grow mt-4 mb-20 overflow-x-hidden">
      <div className="flex-none flex-col">
        <div className="flex-none">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="w-[3.9rem] h-[3.9rem] rounded-full border border-white flex items-center justify-center origin-right"
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
            >
              <BsArrowRight size={25} className="origin-center" />
            </motion.span>
          </motion.div>
          <div className="grow items-center justify-center flex h-full py-4"></div>
        </div>
      </div>
      <div className="flex flex-col flex-1 ml-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-2/3">
            <motion.h1
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
              className="text-[30px] md:text-[2rem] pb-3"
            >
              Let’s explore more
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              className="font-mono text-gray"
            >
              Discover SFD 2023, Engage in Tech,{<br />}
              Secure Your Spot Now!
            </motion.p>
          </div>
          <div className="md:basis-1/3">
            <div className="text-left md:text-right align-top pt-6 pb-10">
              <motion.div
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
              >
                <Button
                  label="Register Now"
                  onClick={goToRegister}
                  outline
                  icon={TbChevronRight}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
