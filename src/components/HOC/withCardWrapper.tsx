const withCardWrapper = (WrappedComponent:any, backgroundColor:any) => {
    return (props:any) => {
      return (
        <div style={{
          backgroundColor: backgroundColor || 'white',
          borderRadius: '15px',
          padding: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '10px 0'
        }}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };
  
  export default withCardWrapper;
  