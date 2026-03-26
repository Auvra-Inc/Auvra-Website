const Design = () => {
    return (
        // 1. Added flexbox to handle the centering on md screens and above
        <div className="font-clash text-[18px] py-16 px-10 flex flex-col md:items-center md:text-center">
            
            {/* 2. Swapped fixed width/height for max-w. Added mb-4 for spacing instead of padding on the paragraph */}
            <h2 className="font-medium max-w-[300px] md:max-w-none md:text-2xl mb-4 text-gray-900">
                The vault behind everything you keep
            </h2>
            
            {/* 3. Used max-w-[400px] so it still wraps exactly where you want it to, but stays centered */}
            <p className="font-light max-w-[400px] text-gray-600 leading-relaxed">
                Every memory, every moment, woven together into a space only you can open. Connected, preserved, and yours alone.
            </p>
            
        </div>
    );
};

export default Design;