import { useState } from 'react';
import { useTranslation } from 'react-i18next';  // useTranslation ekle
import { FaRegObjectGroup, FaLayerGroup, FaTools, FaRobot } from 'react-icons/fa';

const ServicesList = () => {
  const { t } = useTranslation();  // useTranslation hook'unu kullanarak çevirileri al
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
  );

  const features = [
    {
      icon: <FaRegObjectGroup className="text-4xl" />,
      title: t('services_list.features.0.title'),  // Çeviriyi al
      description: t('services_list.features.0.description'),  // Çeviriyi al
      image: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww',
    },
    {
      icon: <FaLayerGroup className="text-4xl" />,
      title: t('services_list.features.1.title'),
      description: t('services_list.features.1.description'),
      image: 'https://via.placeholder.com/1024x527/33FF57/FFFFFF?text=Ak%C4%B1ll%C4%B1+%C4%B0%C5%9F+Ak%C4%B1%C5%9Flar%C4%B1',
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: t('services_list.features.2.title'),
      description: t('services_list.features.2.description'),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU5phWbZ67wKUs2GRh9mgADfa0D8SqrKE_Q&s',
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: t('services_list.features.3.title'),
      description: t('services_list.features.3.description'),
      image: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww',
    },
  ];

  return (
    <section className="text-center py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold font-calsans">
        {t('services_list.title')} <br /> {t('services_list.subtitle')}
      </h1>

      <p className="text-gray-500 mt-4 text-xl">
        {t('services_list.description')}
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
            <div className='dark:text-primary-main'>{feature.icon}</div>
            <h3 className="font-bold mt-4 dark:text-gray-600">{feature.title}</h3>
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
