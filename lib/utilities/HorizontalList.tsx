import { Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  separator: {
    width: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: -20,
  },
  right: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginRight: -20,
  },
});

interface Props {
  variant?: 'left' | 'right';
  separator?: string;
  children: string | React.ReactElement | React.ReactElement[];
  style?: Style | Style[];
}

export default function HorizontalList({
  variant = 'left',
  separator = '|',
  children,
  style: inheritedStyle,
}: Props) {
  const containerStyle = inheritedStyle
    ? [inheritedStyle, styles.container].flat()
    : styles.container;

  if (!Array.isArray(children)) {
    if (typeof children === 'string') {
      return <Text style={containerStyle}>{children}</Text>;
    } else {
      return <View style={containerStyle}>{children}</View>;
    }
  }

  if (variant === 'right') {
    return (
      <View style={containerStyle}>
        <View style={styles.right}>
          {children.map((child, index) => (
            <View key={index} style={styles.item}>
              {child}
              <Text style={styles.separator}>{separator}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <View style={styles.left}>
        {children.map((child, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.separator}>{separator}</Text>
            {child}
          </View>
        ))}
      </View>
    </View>
  );
}
