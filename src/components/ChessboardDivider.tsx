import Image from 'next/image';

const ChessboardDivider = () => {
    const lightColor = '#fffbeb'; // amber-50

    return (
        <div>
            {/*
              Trik untuk membuat elemen "keluar" dari container dan membentang selebar layar.
              Ini mengatasi masalah padding di elemen parent.
            */}
            <div className="w-screen relative -translate-x-1/2 left-1/2">
                {/* Top cream strip */}
                <div className="h-1" style={{ backgroundColor: lightColor }}></div>

                {/* 
                  Using Next.js Image component to resolve linting error.
                  'fill' makes it responsive, 'unoptimized' is best for SVGs.
                */}
                <div className="relative" style={{ height: '36px' }}>
                    <Image
                        src="/patterns/chessboard.svg"
                        alt="Chessboard pattern divider"
                        aria-hidden="true"
                        fill
                        unoptimized
                        className='text-[#5C4033]'
                    />
                </div>
            </div>
        </div>
    );
};

export default ChessboardDivider;
