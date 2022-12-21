interface BadgeProps {
    count: number;
}

export function Badge({ count }: BadgeProps) {
  const styles = {
    circle: {
      width: '25px',
      height: '19px',
      padding: '2px 8px',
      gap: '10px',
      marginLeft: '10px',
      background: '#333333',
      borderRadius: '999px',
    },
    count: { color: "#FFF"},
  };

  return (
    <span style={styles.circle}>
      <span style={styles.count}>{count}</span>
    </span>
  );
}
