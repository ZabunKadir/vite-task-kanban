import CustomButton from "@/components/common/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 md:px-20 dark:bg-deepCyan relative">
      <div className="max-w-3xl space-y-8 mt-20">
        <h1 className="text-4xl md:text-7xl font-bold text-primary-main dark:text-primary-light font-calsans">
          Proje Yönetimi <br />
          Yapay Zeka ile Güçleniyor
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-200 mt-4">
          Ekibinizin üretkenliğini artırın ve projelerinizi sorunsuz yönetin.
          Yapay zeka destekli iş akışları, otomasyon ve çevik yönetim
          araçlarıyla süreci hızlandırın.
        </p>

        <CustomButton
          type="button"
          variant="primary"
          className="px-4 py-2 bg-primary-mid hover:bg-primary-light text-white rounded-full font-medium mb-4"
        >
          PLATFORMU KEŞFEDİN
        </CustomButton>
      </div>

      {/* Görseli alta hizalamak için absolute positioning eklendi */}
      <div className="mt-10 w-full px-4 md:px-16 flex justify-center items-center">
        <div className="w-full max-w-5xl">
          <img
            src="https://teamboard.cloud/wp-content/uploads/2024/04/full-hierarchy-basic-2334x1202-v08.10.22-1024x527.png"
            alt="AI collaboration"
            className="w-full h-1/3 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
