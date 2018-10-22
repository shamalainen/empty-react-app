import React from 'react';

import { Card } from '../Card';
import { ImagesImage } from '../Images';

const paragraph = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dui neque. In feugiat gravida dui sed convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nec laoreet lorem. Maecenas non elementum ipsum. Cras malesuada pulvinar lectus, at efficitur nibh. Cras fringilla commodo ornare. Aenean egestas sodales nisi non placerat. In hac habitasse platea dictumst. Etiam nec tincidunt elit. Aenean scelerisque diam id mi hendrerit, quis commodo turpis semper. Morbi faucibus elit nec porttitor tempor. Maecenas molestie mollis auctor.',
  'In eleifend ipsum non eleifend elementum. Sed sem orci, iaculis non euismod vel, hendrerit et lorem. Ut aliquet magna sit amet justo malesuada, eu rhoncus magna accumsan. Vivamus ut hendrerit sapien, dapibus accumsan ex. Ut sapien dolor, porta et est quis, condimentum egestas sapien. Aliquam erat risus, interdum et auctor ut, elementum sit amet nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vehicula ex sapien, non tempus ante congue venenatis.',
  'Sed vitae maximus nibh, eget ullamcorper leo. Aenean efficitur bibendum arcu, quis facilisis ante elementum non. Suspendisse congue ullamcorper ipsum efficitur sollicitudin. Proin sagittis malesuada sapien, dapibus tempor magna. Aliquam finibus sem ac diam facilisis, non dapibus quam vehicula. Fusce fringilla mi diam, vel congue massa feugiat ac. Donec at libero eget mauris scelerisque semper non eu velit. Ut id sem aliquet, congue dui id, blandit ex. Nunc aliquam magna et tempor dignissim. Praesent a dignissim nunc, non varius dolor. Quisque eget fringilla elit. Sed sed turpis viverra, commodo turpis eu, interdum mi. Aenean id purus sed massa tristique vehicula eget at lacus. Duis venenatis lectus sit amet mauris efficitur, ut sollicitudin justo egestas. Aliquam porta varius blandit. Vivamus et consequat ligula.',
  'Praesent pellentesque lectus in turpis porta pharetra. Praesent varius nibh eget sem malesuada, maximus molestie nibh pharetra. Etiam erat felis, pulvinar nec nisi ut, vulputate ultricies quam. Etiam non enim eu libero tempus tempus in id diam. Nullam lectus lorem, tincidunt eu neque sit amet, blandit mattis lorem. Vestibulum pulvinar eros mi, id ultrices lorem fermentum vel. Suspendisse ac feugiat leo, a pellentesque ligula. Integer vel efficitur turpis.',
  'Curabitur sed malesuada tortor, ut vestibulum lorem. Etiam viverra rutrum convallis. Vivamus at aliquam ligula. Quisque ex felis, ornare vitae semper a, viverra vitae turpis. Nunc porta lacinia nulla sed feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum interdum sem, vitae congue libero malesuada eu. Nunc vitae dapibus turpis. Etiam faucibus facilisis neque vitae vestibulum. Donec imperdiet nibh erat, ac pharetra massa accumsan nec.',
];

const About = () => (
  <div className="container container--inset">
    <h1>PAGE 3</h1>

    <ImagesImage category="tech" />

    {paragraph.map(i => (
      <p key={i}>{i}</p>
    ))}

    <Card color="blue" />
  </div>
);

export { About };
