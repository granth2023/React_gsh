function BreakpointIndicator () {
    return (
        <div className="fixed bottom-4 left-4 z-50">
            <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                <span className="hidden sm:inline-block">sm</span>
                <span className="hidden md:inline-block">md</span>
                <span className="hidden lg:inline-block">lg</span>
                <span className="hidden xl:inline-block">xl</span>
                <span className="hidden 2xl:inline-block">2xl</span>
            </div>

        </div>
    )
}

export default BreakpointIndicator 