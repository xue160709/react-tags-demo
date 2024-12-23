'use client';
import { Tag } from '@xue160709/react-tags';
import { FiGithub, FiStar, FiTag } from 'react-icons/fi';
import { useState, useEffect } from 'react';

// 定义演示区块的类型
interface DemoSection {
  title: string;
  description?: string;
  content: React.ReactNode;
}

// 定义基础颜色标签的配置
const basicColors: { color: string; text: string }[] = [
  { color: 'blue', text: 'Blue Tag' },
  { color: 'green', text: 'Green Tag' },
  { color: 'red', text: 'Red Tag' },
  { color: 'yellow', text: 'Yellow Tag' },
  { color: 'purple', text: 'Purple Tag' },
  { color: 'indigo', text: 'Indigo Tag' },
  { color: 'pink', text: 'Pink Tag' },
  { color: 'gray', text: 'Gray Tag' },
  { color: 'orange', text: 'Orange Tag' },
  { color: 'teal', text: 'Teal Tag' },
  { color: 'black', text: 'Black Tag' },
  { color: 'white', text: 'White Tag' },
];

// 定义渐变效果的配置
const gradients = [
  {
    text: 'Blue Gradient',
    gradient: { from: '#1677ff', to: '#69b1ff', direction: '45deg' }
  },
  {
    text: 'Purple Gradient',
    gradient: { from: '#722ED1', to: '#B37FEB', direction: 'to right' }
  },
  {
    text: 'Sunset Gradient',
    gradient: { from: '#FF4D4F', to: '#FFA940', direction: '135deg' }
  },
  {
    text: 'Aurora Gradient',
    gradient: { from: '#13C2C2', to: '#36CFC9', direction: 'to bottom right' }
  },
];

// 展示区块组件
const DemoBlock: React.FC<DemoSection> = ({ title, description, content }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <div className="flex flex-wrap gap-2 items-center">
      {content}
    </div>
  </section>
);

// 主页组件
export default function Home() {
  const [starCount, setStarCount] = useState<number>(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/xue160709/react-tags')
      .then(res => res.json())
      .then(data => setStarCount(data.stargazers_count))
      .catch(err => console.error('获取 star 数量失败:', err));
  }, []);

  const demoSections: DemoSection[] = [
    {
      title: 'Basic Colors',
      content: basicColors.map(({ color, text }) => (
        <Tag key={color} text={text} color={color as any} />
      ))
    },
    {
      title: 'Custom Colors',
      description: 'Customize text and background colors separately',
      content: (
        <>
          <Tag 
            text="Custom Text Only" 
            color="custom" 
            customColor={{ text: '#f50' }} 
          />
          <Tag 
            text="Custom Background" 
            color="custom" 
            customColor={{ text: '#ffffff', background: 'green' }} 
          />
          <Tag 
            text="Fully Custom" 
            color="custom" 
            customColor={{ text: '#108ee9', background: '#e6f7ff' }} 
          />
          <Tag 
            text="Text Only" 
            color="custom" 
            customColor="#ff4d4f" 
          />
        </>
      )
    },
    {
      title: 'Closable Tags',
      content: (
        <>
          <Tag 
            text="Direct Close" 
            color="blue" 
            onClose={() =>{}} 
          />
          <Tag 
            text="Fade Out" 
            color="green" 
            fadeOut={true}
            onClose={() => {}} 
          />
          <Tag 
            text="Close with Alert" 
            color="yellow" 
            onClose={() => alert('Closed')} 
          />
        </>
      )
    },
    {
      title: 'Different Sizes',
      content: (
        <>
          <Tag text="Small Tag" size="small" color="blue" />
          <Tag text="Medium Tag" size="medium" color="green" />
          <Tag text="Large Tag" size="large" color="purple" />
        </>
      )
    },
    {
      title: 'Tags with Icons',
      content: (
        <>
          <Tag text="GitHub" color="gray" icon={<FiGithub />} />
          <Tag text="Favorite" color="yellow" icon={<FiStar />} />
          <Tag text="Tag" color="blue" icon={<FiTag />} />
        </>
      )
    },
    {
      title: 'Gradient Effects',
      content: gradients.map((item, index) => (
        <Tag
          key={index}
          text={item.text}
          gradient={item.gradient}
        />
      ))
    },
    {
      title: 'Font Styles',
      content: (
        <>
          <Tag text="Normal Tag" color="blue" />
          <Tag text="Italic Tag" color="green" italic />
          <Tag text="Large Bold" color="purple" fontSize="18px" fontWeight={600} />
          <Tag text="Custom Font" color="pink" fontSize="16px" fontWeight={500} italic />
        </>
      )
    },
    {
      title: 'Border Styles',
      content: (
        <>
          <Tag text="No Border" color="blue" noBorder />
          <Tag text="Thick Border" color="green" borderWidth={2} />
          <Tag text="Rounded Tag" color="purple" borderRadius="20px" />
          <Tag text="Custom Border" color="pink" borderWidth={3} borderRadius="10px" />
        </>
      )
    },
    {
      title: 'Opacity and Shadow',
      description: 'Set tag opacity (0-100) and shadow effects',
      content: (
        <>
          <Tag text="100% Opaque" color="blue" opacity={100} />
          <Tag text="70% Opacity" color="green" opacity={70} />
          <Tag text="40% Opacity" color="purple" opacity={40} />
          <Tag text="With Shadow" color="pink" shadow />
          <Tag 
            text="Opacity + Shadow" 
            color="orange" 
            opacity={80} 
            shadow 
          />
        </>
      )
    },
    {
      title: 'Hover Effects',
      description: 'Different mouse hover interactions',
      content: (
        <>
          <Tag 
            text="Pointer Style" 
            color="blue" 
            interactive="pointer"
            onClick={() => alert('Tag clicked')}
          />
          <Tag 
            text="Scale Effect" 
            color="green" 
            interactive="scale"
            onClick={() => alert('Tag clicked')}
          />
          <Tag 
            text="Shine Effect" 
            color="purple" 
            interactive="shine"
            onClick={() => {
              alert('Tag clicked');
            }}
          />
          <Tag 
            text="Scale + Shine" 
            color="orange" 
            interactive={['scale', 'shine']}
            onClick={() => {
              alert('Tag clicked');
            }}
          />
        </>
      )
    },
    {
      title: 'Event Handling',
      description: 'Event handling demonstration',
      content: (
        <>
          <Tag 
            text="Stop Propagation" 
            color="blue" 
            interactive={["scale"]}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              alert('Click event propagation stopped');
            }} 
          />
          <Tag 
            text="Get Event Info" 
            color="green" 
            interactive={["scale"]}
            onClick={(event) => {
              alert(`Click coordinates: x=${event.clientX}, y=${event.clientY}`);
            }} 
          />
          <Tag 
            text="Custom Callback" 
            color="purple" 
            interactive={["scale"]}
            onClick={(event) => {
              event.preventDefault();
              console.log('Event object:', event);
              alert('Check console for complete event details');
            }} 
          />
        </>
      )
    },
    {
      title: 'Child Elements and Style Props',
      description: 'Demonstrating child elements and custom styles',
      content: (
        <>
          <Tag style={{ marginRight: 8, backgroundColor: '#f0f0f0' }}>
            Custom Style Tag
          </Tag>
          
          <Tag 
            style={{ cursor: 'pointer', backgroundColor: '#e6f7ff' }}
            onClick={(e) => {
              e.stopPropagation();
              alert('Click event triggered and bubbling prevented');
            }}
          >
            Clickable Tag
          </Tag>

          <Tag 
            style={{ 
              marginRight: 5, 
              marginBottom: 5, 
              cursor: "pointer",
              backgroundColor: '#f6ffed'
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://scholar.google.com/scholar?q=react', '_blank');
            }}
          >
            Google Scholar
          </Tag>
        </>
      )
    },
    {
      title: 'Event Handling Examples',
      description: 'Demonstrating event handling and bubble control',
      content: (
        <div onClick={() => alert('Parent element clicked')}>
          <p className="mb-2 text-gray-600">Click tag to test event bubbling (tag prevents bubbling to parent)</p>
          <Tag 
            style={{ backgroundColor: '#fff0f6' }}
            onClick={(e) => {
              e.stopPropagation();
              alert('Tag clicked (event bubbling prevented)');
              console.log('Tag clicked (event bubbling prevented)',e);
            }}
          >
            Stop Bubbling Example
          </Tag>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen p-8 relative">
      <a
        href="https://github.com/xue160709/react-tags"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-8 right-8 flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <FiGithub className="text-xl" />
        <span className="flex items-center gap-1">
          <FiStar className="text-yellow-500" />
          {starCount}
        </span>
      </a>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">React Tags Component Demo</h1>
        {demoSections.map((section, index) => (
          <DemoBlock key={index} {...section} />
        ))}
      </main>
    </div>
  );
}
