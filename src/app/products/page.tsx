import { Suspense } from 'react';

return  <Suspense fallback={<div>Loading products...</div>}>
<Products />
</Suspense>;