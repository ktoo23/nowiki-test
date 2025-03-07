const EmptyNotice = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="bg-mc_yellow rounded-full p-6 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-700 mb-2">
        선택하신 조건에 맞는 버거가 없어요.
      </h3>
      <p className="text-xl text-muted-foreground mb-6">
        다른 버거 종류나 맛을 선택해 보세요
      </p>
    </div>
  );
};

export default EmptyNotice;
