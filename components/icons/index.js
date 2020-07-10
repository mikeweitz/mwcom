const Print = ({fill, alt}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {alt && <title>{alt}</title>}
      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" fill={fill || '#fff'}/>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const Arrow = ({ fill, alt, style }) => {  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      data-tags="remove-circle, cancel, close, remove, delete"
      viewBox="0 0 1200 1200"       
      >
        {alt && <title>{alt}</title>}
        <path fill={fill || '#fff'} d="M599.992 0L131.243 703.131H383.79V1200h432.422V703.131h252.546L599.992 0z"/>
    </svg>
  )
}

const Close = ({ fill, alt }) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 96 96">
      {alt && <title>{alt}</title>}
      <polygon fill={ fill || '#fff' } points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "/>
    </svg>
  );
}

export { Print, Arrow, Close };


