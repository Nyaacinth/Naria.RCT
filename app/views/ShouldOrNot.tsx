import { motion } from "framer-motion"
import type { FC } from "react"
import { useRandomBoolean } from "../hooks/useRandomBoolean"

export const ShouldOrNot: FC = () => {
    const [shouldOrNot, nextShouldOrNot] = useRandomBoolean()

    return (
        <motion.div
            initial={false}
            animate={{ backgroundColor: shouldOrNot ? "#A3D383" : "#B383D4" }}
            data-tauri-drag-region
            className={`relative w-full h-full flex flex-col
                        items-center justify-center
                        text-white text-opacity-85 text-shadow-md
                        font-bold text-4xl`}
        >
            <div className="contents pointer-events-none">
                {shouldOrNot ? (
                    <>
                        <div>Yes👍</div>
                        <div>just do it!</div>
                    </>
                ) : (
                    <>
                        <div>No👎</div>
                        <div>don&lsquo;t do it!</div>
                    </>
                )}
            </div>
            <div className="absolute bottom-1 font-thin text-xs pointer-events-none">
                Notice: you shouldn&lsquo;t use this in serious scenarios
            </div>
            <button className="absolute top-5 right-5 bg-transparent text-xl" onClick={nextShouldOrNot}>
                <div className="i-solar-refresh-broken cursor-pointer" />
            </button>
        </motion.div>
    )
}
