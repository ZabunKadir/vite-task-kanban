import { useState } from 'react';
import { FaRegObjectGroup, FaLayerGroup, FaTools, FaRobot } from 'react-icons/fa';

const features = [
  {
    icon: <FaRegObjectGroup className="text-4xl" />, 
    title: 'Sorun Yönetimi',
    description:
      'Projeler arası sorunları tek bir platformda toplayın. Görev, hata ve iyileştirme isteklerinizi kolayca yönetin.',
      image: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww',
    },
  {
    icon: <FaLayerGroup className="text-4xl" />,
    title: 'Akıllı İş Akışları',
    description:
      'Takımınızın verimliliğini artırın. Otomasyon ve akıllı senkronizasyon ile iş akışlarınızı optimize edin.',
    image: 'https://via.placeholder.com/1024x527/33FF57/FFFFFF?text=Ak%C4%B1ll%C4%B1+%C4%B0%C5%9F+Ak%C4%B1%C5%9Flar%C4%B1',
  },
  {
    icon: <FaTools className="text-4xl" />,
    title: 'Çevik Panolar',
    description:
      'Projelerinizi çevik panolarla yönetin. Sürükle-bırak özelliği sayesinde görevlerinizi kolayca düzenleyin.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU5phWbZ67wKUs2GRh9mgADfa0D8SqrKE_Q&s',
  },
  {
    icon: <FaRobot className="text-4xl" />,
    title: 'Yapay Zeka Destekli Analiz',
    description:
      'Yapay zeka ile proje verilerinizi analiz edin. Tıkanıklıkları öngörün ve ekip performansınızı artırın.',
    image: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww',
  },
];

const ServicesList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(features[0].image);

  return (
    <section className="text-center py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold font-calsans">
        Profesyonel Proje Yönetim Araçları <br /> İş Akışınızı Hızlandırın
      </h1>

      <p className="text-gray-500 mt-4 text-xl">
        Güçlü otomasyon ve sezgisel araçları birleştirerek, ekibinizin verimliliğini ve projelerinizin başarısını artırın.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-lg p-5 flex flex-col items-center text-center transition-all duration-300 transform hover:bg-gray-100 hover:scale-105 cursor-pointer ${index === activeIndex ? 'bg-gray-100 scale-105' : ''}`}
            onClick={() => {
              setActiveIndex(index);
              setSelectedImage(feature.image);
            }}
          >
            <div>{feature.icon}</div>
            <h3 className="font-bold mt-4">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full flex justify-center items-center">
        <img src={selectedImage} alt="Selected Feature" className="w-full max-w-5xl h-80 object-cover" />
      </div>
    </section>
  );
};

export default ServicesList;