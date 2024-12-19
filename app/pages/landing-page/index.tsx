import Image from "next/image";
import profile from '../../assets/pfp.jpeg';

const LandingPage: React.FC = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex flex-col items-start h-screen p-20">
            <div className="text-left">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Development
            </button>
            <p className="mt-10 text-gray-400">{currentDate}</p>
            </div>
            <div className="text-left mt-10">
            <h1 className="text-3xl font-bold text-white">Create Event Flow</h1>
            <p className="mt-4 text-gray-400 font-light">
                A simplified user-flow for quickly adding events to your event calendar.
            </p>
            </div>

            <div className="mt-auto flex items-center">
                <Image
                    src={profile}
                    alt="Profile Picture"
                    className="rounded-full size-16 border-2 border-white object-cover"
                />
                <div className="ml-4">
                    <p className="text-white font-semibold text-sm">Created by Will Renner</p>
                    <p className="text-gray-400 text-xs">william@showops.co</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
