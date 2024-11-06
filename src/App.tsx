import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import {
  HorizontalList,
  LinkifiedSpan,
  HeadingCard,
  DescriptionTable,
  StackedCard,
  GridCard,
} from '../lib/main';
import sampleData from './assets/sample-card-data.json';
import loremArr from './assets/lorem-array.json';

const { title, subtitle, note, description, highlights } = sampleData;

const styles = StyleSheet.create({
  page: {
    padding: '0.5in',
    fontSize: 14,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingBottom: 10,
    marginTop: 28,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  example: {
    backgroundColor: 'lightgray',
    marginVertical: '5',
  },
});

function App() {
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        <Page size="LETTER" style={styles.page}>
          <View>
            <Text style={styles.h1}>Horizontal List</Text>
            <Text style={styles.h2}>Plain text child</Text>
            <HorizontalList style={styles.example}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore consequatur provident, necessitatibus commodi similique
              deleniti. Nobis aperiam perferendis quas quod cumque laudantium
              saepe incidunt enim nesciunt maxime. Rem, suscipit itaque?
            </HorizontalList>

            <Text style={styles.h2}>Single Element child</Text>
            <HorizontalList style={styles.example}>
              <Text>Child</Text>
            </HorizontalList>

            <Text style={styles.h2}>Left variant</Text>
            <HorizontalList style={styles.example}>
              {loremArr.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </HorizontalList>

            <Text style={styles.h2}>Right variant</Text>
            <HorizontalList variant="right" style={styles.example}>
              {loremArr.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </HorizontalList>
          </View>

          <View>
            <Text style={styles.h1}>Linkified Span</Text>
            <Text style={styles.h2}>String</Text>
            <View style={styles.example}>
              <LinkifiedSpan>string</LinkifiedSpan>
            </View>
            <Text style={styles.h2}>Email</Text>
            <View style={styles.example}>
              <LinkifiedSpan>example@example.com</LinkifiedSpan>
            </View>
            <Text style={styles.h2}>URL</Text>
            <View style={styles.example}>
              <LinkifiedSpan>https://example.com</LinkifiedSpan>
            </View>
          </View>
        </Page>

        <Page size="LETTER" style={styles.page}>
          <View>
            <Text style={styles.h1}>Heading Card</Text>
            <HeadingCard
              title={title}
              subtitle={subtitle}
              note={note}
              description={description}
              highlights={highlights}
              style={styles.example}
            />
          </View>

      <h2>Description Table</h2>
      <DescriptionTable
        data={[sampleData, sampleData]}
        className={styles.example}
      />

      <h2>Stacked Card</h2>
      <StackedCard
        title={title}
        subtitle={subtitle}
        note={note}
        description={description}
        highlights={highlights}
        className={styles.example}
      />

      <h2>Grid Card</h2>
      <div className={styles.grid}>
        {Array(4).fill(
          <GridCard
            title={title}
            subtitle={subtitle}
            note={note}
            description={description}
            highlights={highlights}
            className={styles.example}
          />
        )}
      </div>

      <h1>Sample data</h1>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default App;
