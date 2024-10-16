//
//  SignInView.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 27/8/24.
//

import SwiftUI

struct SignInFormEntries: Codable {
    var email: String = ""
    var password: String = ""
}

struct SignInView: View {
    @State private var form = SignInFormEntries()
    private var apiService: ApiService
    
    init() {
        self.apiService = ApiService()
    }
    
    func canSubmit() -> Bool {
        let mirror = Mirror(reflecting: form)
        return mirror.children.allSatisfy {label, value in
            let formValue = value as! String
            return !formValue.isEmpty
        }
    }
    
    var body: some View {
        WithHeaderView(translationKey: "signMeIn", hasArrow: true) {
            VStack {
                Text("email")
                    .frame(width: 250, alignment: .leading)
                TextField("", text: $form.email, prompt: Text(verbatim: "name@mail.com"))
                    .textInputAutocapitalization(.never)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                Text("password")
                    .frame(width: 250, alignment: .leading)
                SecureField("password", text: $form.password)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                CustomButton<HomeView>(translationKey: "signIn", color: Color("ElectricBlue"), destination: HomeView(), isSmall: true, onPress: {
                   await self.apiService.signIn(userLoginInfo: form)
                })
                .disabled(!canSubmit())
            }
            .frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, maxWidth: 300, minHeight: 0, maxHeight: 250, alignment: .center)
            .background(Color("LightBlue"))
            .cornerRadius(20)
        }
    }
}

#Preview {
    NavigationStack {
        SignInView()
    }
}
