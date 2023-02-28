import React, { useState } from 'react';
import CustomModal from './components/CustomModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerContent = (
    <>
      <h2>Modal Header</h2>
    </>
  );
  
  const bodyContent = (
    <p>
      Modal Body : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque inventore quisquam, quas, quasi, reprehenderit vero consectetur saepe a fuga dicta dolorem numquam dignissimos? Magnam architecto consequuntur asperiores alias aperiam velit?
    </p>
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isModalOpen && (
        <CustomModal
          height={350}
          width={500}
          headerContent={headerContent}
          headerSeparator={true}
          bodyContent={bodyContent}
          footerSeparator={true}
          showPrimaryButton={true}
          showSecondaryButton={true}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
