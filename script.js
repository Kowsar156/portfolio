function downloadCV() {
  window.open('Kowsar_Mahmud_Pappu.pdf', '_blank');
}

function openTab(tabName) {
  // Get all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Hide all tab contents
  tabContents.forEach(content => {
    content.style.display = 'none';
  });
  
  // Show the selected tab content
  document.getElementById(tabName).style.display = 'block';
}

// Optionally, open the home tab by default
openTab('home');
