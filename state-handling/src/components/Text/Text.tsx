import React from 'react';

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => <h1>{children}</h1>;

export default Text;
