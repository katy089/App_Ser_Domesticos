import { Spinner } from 'flowbite-react';

const styles = {
  spinner: {
    position: "fixed",
    top: "17.5%",
    left: "50%",
  },
};

function Loading({ loading, children }) {
  if (loading) {
    return (
      <Spinner aria-label="Default status example" style={styles.spinner}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return children;
  }
}

export default Loading;