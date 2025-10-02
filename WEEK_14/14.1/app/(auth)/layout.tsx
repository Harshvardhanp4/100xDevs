

export default function ({ children }: { children: React.ReactNode }

) {
    return <div>
        <div className="border-t border-b text-center">
            20% off for next few days
        </div>
        {children}
    </div>


}