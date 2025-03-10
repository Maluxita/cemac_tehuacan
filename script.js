function checkStatus() {
    const memberId = document.getElementById('memberId').value.trim();
    const statusMessage = document.getElementById('statusMessage');

    const membersData = {
        '1001': 'Activo',
        '1002': 'Inactivo',
        '1003': 'Pendiente de pago'
    };

    if (memberId === '') {
        statusMessage.textContent = 'Por favor, ingresa tu ID de socio.';
        statusMessage.style.color = '#f44336';
        return;
    }

    const status = membersData[memberId];

    if (status) {
        statusMessage.textContent = `Tu estatus es: ${status}`;
        statusMessage.style.color = status === 'Activo' ? '#2e7d32' : '#f44336';
    } else {
        statusMessage.textContent = 'ID de socio no encontrado.';
        statusMessage.style.color = '#f44336';
    }
}
