import { Blocks } from 'react-loader-spinner';

export function Loader() {
  return (
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass="blocks-wrapper"
    />
  );
}
