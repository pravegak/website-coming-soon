import React from 'react';

import { Landing } from '@/containers/Landing/Landing';
import { Layout } from '@/layout/Layout';
import { Meta } from '@/layout/Meta';

export default function LandingPage() {
  return (
    <Layout
      meta={
        <Meta
          title="Pravegak Technologies - India's leading software agency | Under Maintenance"
          description="Get best websites, mobile applications, CRMs and other software for your business. We are India's leading tech company with highly experienced team."
        />
      }
    >
      <Landing />
    </Layout>
  );
}
