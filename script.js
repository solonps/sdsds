document.getElementById('reportBtn').addEventListener('click', function() {
    document.getElementById('reportForm').classList.remove('hidden');
    this.classList.add('hidden');
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const vehicle = document.getElementById('vehicle').value;
    const plate = document.getElementById('plate').value;
    const location = document.getElementById('location').value;

    if (vehicle && plate && location) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 300;
        canvas.classList.remove('hidden');

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Alerta de Caminhão Roubado', 150, 50);
        ctx.fillText(`Veículo: ${vehicle}`, 50, 100);
        ctx.fillText(`Placa: ${plate}`, 50, 150);
        ctx.fillText(`Local do Roubo: ${location}`, 50, 200);

        const link = document.createElement('a');
        link.download = 'alerta_caminhao_roubado.jpeg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});