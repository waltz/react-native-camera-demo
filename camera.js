
export default class mobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Take a Photo' onPress={null}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
