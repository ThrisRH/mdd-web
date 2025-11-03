import React, { useEffect, useState } from 'react';
import Loading from '@/app/(user)/loading';
import NotFound from '@/components/Main/NotFound';
import { MainContentContainer } from '@/styles/components/layout/Layout.styles';
import { FlexContainer } from '@/styles/components/layout/Common.styles';

interface WithLoadingProps {
  [key: string]: any;
}

export function withLoading<P extends WithLoadingProps>(
  WrappedComponent: React.ComponentType<P>,
  dataKey: string
) {
  return function WithLoadingComponent(props: P) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (props[dataKey]) {
        setLoading(false);
      }
    }, [props[dataKey]]);

    if (loading) {
      return (
        <MainContentContainer>
          <FlexContainer $justify="center">
            <Loading />
          </FlexContainer>
        </MainContentContainer>
      );
    }

    // Check if data exists and has required properties
    if (!props[dataKey] || !props[dataKey].documentId) {
      return (
        <MainContentContainer>
          <FlexContainer $justify="center">
            <NotFound />
          </FlexContainer>
        </MainContentContainer>
      );
    }

    return <WrappedComponent {...props} />;
  };
}