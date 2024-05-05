import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { motion } from 'framer-motion';


const LoadingCard = ({delay = 0}) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="sm:w-[438px] w-[365px] h-[461px] space-y-5 p-4 bg-[#797979]" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-40 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-10">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-12 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-12 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">  
              <div className="h-12 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </motion.div>
    )
}

export default LoadingCard