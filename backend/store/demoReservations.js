const demoReservations = [];

export function addDemoReservation(reservation) {
  demoReservations.unshift({
    ...reservation,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
  });
}

export function listDemoReservations() {
  return demoReservations;
}

