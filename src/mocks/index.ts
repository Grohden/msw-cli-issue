if (typeof window === 'undefined') {
  const { server } = await import('./server');

  server.listen({ onUnhandledRequest: 'warn' });

  server.listHandlers().forEach(handler => {
    // eslint-disable-next-line no-console
    console.log(handler.info.header);
  });
} else {
  const { worker } = await import('./browser');

  await worker.start({ onUnhandledRequest: 'warn' });

  worker.listHandlers().forEach(handler => {
    // eslint-disable-next-line no-console
    console.log(handler.info.header);
  });
}

export {};
