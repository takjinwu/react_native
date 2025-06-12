import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View>
            <Text style={styles.profileName}>할 일</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={{ marginRight: 16 }}>
              <Text>결제</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Ionicons name="notifications-outline" size={28} color="#222" />
              <View style={styles.badge} size={10}>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 90 }}>
        {/* 송금하기 */}
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuBtnText}>토스뱅크</Text>
          <Ionicons name="chevron-forward" size={22} color="#bbb" />
        </TouchableOpacity>

        {/* 계좌 */}
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <Text style={styles.cardTitle}>토스뱅크 통장</Text>
            <Text style={styles.cardAmount}>381,840 원</Text>
          </View>
          <View style={styles.accountItem}>
            <Ionicons name="wallet-outline" size={22} color="#1e90ff" style={{ marginRight: 8 }} />
            <Text style={{ flex: 1 }}>토스뱅크에 쌓인 이자</Text>
            <Text style={styles.accountBalance}>26원</Text>
            <TouchableOpacity style={styles.transferBtn}><Text style={styles.transferBtnText}>지금 받기</Text></TouchableOpacity>
          </View>
          <View style={styles.accountItem}>
            <Ionicons name="card-outline" size={22} color="#1e90ff" style={{ marginRight: 8 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.accountDesc}>토스뱅크 나눠모으기</Text>
              <Text style={styles.accountBalance}>22,010,633 원</Text>
            </View>
          </View>
          <View style={styles.accountItem}>
            <Ionicons name="card-outline" size={22} color="#1e90ff" style={{ marginRight: 8 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.accountDesc}>해골저금통</Text>
              <Text style={styles.accountBalance}>190 원</Text>
            </View>
            <TouchableOpacity style={styles.transferBtn}><Text style={styles.transferBtnText}>송금</Text></TouchableOpacity>
          </View>
        </View>
        

        

        {/* 카드 */}
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <Text style={styles.cardTitle}>6월에 쓴 돈</Text>
            <Text style={styles.cardAmount}>608,348 원</Text>
          </View>
          <View style={styles.cardItem}>
            <Ionicons name="cash-outline" size={22} color="#1e90ff" style={{ marginRight: 8 }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.cardDesc}>토스뱅크 오렌지밀크</Text>
              <Text style={styles.cardBalance}>608,348원</Text>
            </View>
          </View>
        </View>

        {/* 투자 */}
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuBtnText}>토스신용카드</Text>
          <Ionicons name="chevron-forward" size={22} color="#bbb" />
        </TouchableOpacity>

        {/* 대출 */}
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuBtnText}>혜택 받고 결제하기</Text>
          <Ionicons name="chevron-forward" size={22} color="#bbb" />
        </TouchableOpacity>

        {/* 신용 */}
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuBtnText}>양도세 환급 받기</Text>
          <Ionicons name="chevron-forward" size={22} color="#bbb" />
        </TouchableOpacity>

        {/* 홈 자산 설정 */}
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="settings-outline" size={22} color="#1e90ff" />
          <Text style={{ color: '#1e90ff', fontWeight: 'bold', marginLeft: 6 }}>홈 자산 설정</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 하단 탭 바 */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={26} color="#1e90ff" />
          <Text style={styles.tabLabel}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="calendar-outline" size={26} color="#bbb" />
          <Text style={styles.tabLabel}>캘린더</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItemCenter}>
          <View style={styles.tabAddCircle}>
            <Ionicons name="add" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="list-outline" size={26} color="#bbb" />
          <Text style={styles.tabLabel}>전체</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="ellipsis-horizontal" size={26} color="#bbb" />
          <Text style={styles.tabLabel}>더보기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f7f8fa' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  profileImg: { width: 48, height: 48, borderRadius: 24, marginRight: 12, backgroundColor: '#eee' },
  profileName: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  profileLink: { fontSize: 12, color: '#888', marginTop: 2 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  badge: {
    position: 'absolute', right: -8, top: -6,
    backgroundColor: '#ff3b30', borderRadius: 10, paddingHorizontal: 5, minWidth: 20, height: 20, justifyContent: 'center', alignItems: 'center'
  },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  scroll: { flex: 1, backgroundColor: '#f7f8fa' },
  menuBtn: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', padding: 18, marginTop: 12,
    borderRadius: 12, marginHorizontal: 14
  },
  menuBtnText: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  card: {
    backgroundColor: '#fff', borderRadius: 12, marginTop: 12, marginHorizontal: 14, padding: 18,
    shadowColor: "#000", shadowOpacity: 0.03, shadowRadius: 4, elevation: 2
  },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  cardTitle: { fontWeight: 'bold', fontSize: 16, color: '#222' },
  cardAmount: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  accountItem: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  accountDesc: { fontSize: 13, color: '#222' },
  accountBalance: { fontSize: 14, color: '#222', marginRight: 8 },
  transferBtn: {
    borderWidth: 1, borderColor: '#1e90ff', borderRadius: 6,
    paddingHorizontal: 10, paddingVertical: 3, marginLeft: 6
  },
  transferBtnText: { color: '#1e90ff', fontWeight: 'bold', fontSize: 13 },
  cardItem: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  cardImg: { width: 40, height: 24, borderRadius: 4, backgroundColor: '#eee' },
  cardDesc: { fontSize: 13, color: '#222' },
  cardBalance: { fontSize: 14, color: '#222', marginTop: 3 },
  addBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#fff', borderRadius: 12, marginTop: 12, marginHorizontal: 14, padding: 15,
    borderWidth: 1, borderColor: '#e0e0e0'
  },
  tabBar: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    height: 70, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: '#eee'
  },
  tabItem: { alignItems: 'center', flex: 1 },
  tabItemCenter: { alignItems: 'center', flex: 1 },
  tabLabel: { fontSize: 11, color: '#888', marginTop: 2 },
  tabAddCircle: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: '#1e90ff', alignItems: 'center', justifyContent: 'center', marginTop: -20
  },
});
