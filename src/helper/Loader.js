import { TailSpin } from 'react-loader-spinner';

const Loader = ({ height = '100', width = '100', color = '#4fa94d' }) => {
  return (
    <TailSpin
      height="40"
      width="40"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="0.5"
      visible={true}
    />
  );
};

export default Loader;
