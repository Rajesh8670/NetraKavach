const detectionData = {
  people: {
    label: 'People',
    statusLabel: 'Person Detected',
    value: 56,
    color: '#4da3ff',
    icon: 'fa-users',
  },
  cars: {
    label: 'Cars',
    statusLabel: 'Cars Detected',
    value: 20,
    color: '#3ddc84',
    icon: 'fa-car',
  },
  trucks: {
    label: 'Trucks',
    statusLabel: 'Truck Detected',
    value: 10,
    color: '#ff6b35',
    icon: 'fa-truck',
  },
  drones: {
    label: 'Drones',
    statusLabel: 'Drones Detected',
    value: 9,
    color: '#feca57',
    image: '/drone.png',
  },
  suspicious: {
    label: 'Suspicious',
    statusLabel: 'Suspicious Activity',
    value: 5,
    color: '#ff4757',
    icon: 'fa-triangle-exclamation',
    suspicious: true,
  },
};

export default detectionData;