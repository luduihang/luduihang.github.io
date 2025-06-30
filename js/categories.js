document.addEventListener('DOMContentLoaded', () => {
  // 分类卡片入场动画
  const animateCategories = () => {
    const items = document.querySelectorAll('.category-list-item');
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `all 0.5s ease ${index * 0.1}s`;
      
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100);
    });
  };

  // 分类卡片悬停效果
  const setupHoverEffects = () => {
    document.querySelectorAll('.category-list-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const count = item.querySelector('.category-list-count');
        if (count) {
          count.style.transform = 'scale(1.1)';
          count.style.transition = 'transform 0.3s ease';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        const count = item.querySelector('.category-list-count');
        if (count) {
          count.style.transform = 'scale(1)';
        }
      });
    });
  };

  // 初始化执行
  setTimeout(() => {
    animateCategories();
    setupHoverEffects();
  }, 300);
});