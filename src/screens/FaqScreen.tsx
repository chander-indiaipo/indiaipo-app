import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

interface FAQ {
  question: string;
  answer: string;
}

interface Category {
  title: string;
  data: FAQ[];
}

interface Props {
  navigation: any;
}

interface State {
  searchText: string;
  expandedIndex: { category: number; faq: number } | null;
}

const categories: Category[] = [
  {
    title: 'General',
    data: [
      { question: 'What is India IPO?', answer: 'This is the sample answer.' },
      { question: 'How to schedule a call?', answer: 'You can use click on "Book a Call" on Dashboard.' },
    ],
  },
  {
    title: 'Account',
    data: [
      { question: 'How do I reset my password?', answer: 'Go to settings > account > reset password.' },
      { question: 'Can I delete my account?', answer: 'Yes, contact support from the help section.' },
    ],
  },
];

class FaqScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
      expandedIndex: null,
    };
  }

  handleToggle = (categoryIndex: number, faqIndex: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const { expandedIndex } = this.state;

    if (
      expandedIndex &&
      expandedIndex.category === categoryIndex &&
      expandedIndex.faq === faqIndex
    ) {
      this.setState({ expandedIndex: null });
    } else {
      this.setState({ expandedIndex: { category: categoryIndex, faq: faqIndex } });
    }
  };

  filterFaqs = (faq: FAQ) => {
    return faq.question.toLowerCase().includes(this.state.searchText.toLowerCase());
  };

  render() {
    const { navigation } = this.props;
    const { searchText, expandedIndex } = this.state;

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#36454F" />
          </TouchableOpacity>
          <Text style={styles.title}>FAQs</Text>
        </View>

        {/* Search */}
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => this.setState({ searchText: text })}
        />

        {/* Categories */}
        <FlatList
          data={categories}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item: category, index: catIndex }) => {
            const filteredData = category.data.filter(this.filterFaqs);
            if (filteredData.length === 0) return null;

            return (
              <View style={styles.category}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                {filteredData.map((faq, faqIndex) => {
                  const isExpanded =
                    expandedIndex &&
                    expandedIndex.category === catIndex &&
                    expandedIndex.faq === faqIndex;

                  return (
                    <View key={faqIndex}>
                      <TouchableOpacity
                        style={styles.faqItem}
                        onPress={() => this.handleToggle(catIndex, faqIndex)}
                      >
                        <Text style={styles.question}>{faq.question}</Text>
                        <MaterialIcons
                          name={isExpanded ? 'remove' : 'add'}
                          size={22}
                          color="#36454F"
                        />
                      </TouchableOpacity>
                      {isExpanded && <Text style={styles.answer}>{faq.answer}</Text>}
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingTop: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#36454F',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchInput: {
    margin: 15,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  category: { paddingHorizontal: 15, marginBottom: 10 },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#36454F',
    marginVertical: 8,
  },
  faqItem: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  question: { fontSize: 15, color: '#333', flex: 1 },
  answer: {
    paddingVertical: 8,
    color: '#555',
    fontSize: 14,
  },
});

export default FaqScreen;
