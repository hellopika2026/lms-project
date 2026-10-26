require('dotenv').config();
const { LinearClient } = require('@linear/sdk');

async function testLinearConnection() {
  const apiKey = process.env.LINEAR_API_KEY;

  console.log('--------------------------------------------------');
  console.log('🔍 Kiểm tra cấu hình Linear API Key...');
  console.log('--------------------------------------------------');

  if (!apiKey || apiKey.trim() === '' || apiKey === 'your_linear_api_key_here') {
    console.error('❌ LỖI: Chưa tìm thấy LINEAR_API_KEY trong file .env!');
    console.error('👉 Vui lòng mở file .env và điền key theo định dạng:');
    console.error('   LINEAR_API_KEY=lin_api_xxxxxxxxxxxxxxxxxxxxxx\n');
    process.exit(1);
  }

  try {
    const linearClient = new LinearClient({ apiKey: apiKey.trim() });
    
    console.log('⏳ Đang kết nối tới Linear API...');
    const me = await linearClient.viewer;
    const organization = await linearClient.organization;
    const teams = await linearClient.teams();

    console.log('\n✅ KẾT NỐI THÀNH CÔNG!');
    console.log('--------------------------------------------------');
    console.log(`👤 Người dùng    : ${me.name} (${me.email})`);
    console.log(`🏢 Workspace     : ${organization.name} (${organization.urlKey})`);
    console.log(`👥 Số lượng Teams: ${teams.nodes.length}`);
    if (teams.nodes.length > 0) {
      console.log('   Danh sách Teams:');
      teams.nodes.forEach(team => {
        console.log(`   - [${team.key}] ${team.name}`);
      });
    }
    console.log('--------------------------------------------------');
  } catch (error) {
    console.error('\n❌ KẾT NỐI THẤT BẠI!');
    console.error('Chi tiết lỗi:', error.message || error);
    console.error('\n👉 Vui lòng kiểm tra lại xem API key có đúng chuẩn và còn hiệu lực không.');
  }
}

testLinearConnection();
